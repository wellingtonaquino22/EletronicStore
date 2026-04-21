import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsStarFill } from 'react-icons/bs'
import { getItem, setItem } from "../../services/LocalStorage";
import { Loading } from "../../components/loading/Loading";
import { AuthContext } from "../../providers/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HeadStore, TitleStore, CategoryPills, CategoryPill, SearchInput,
  StoreGrid, ProductCard, CardImage, CardBody, CardCategory, CardTitle,
  CardBottom, CardPrice, CardRating, AddButton, Pagination, ResultsInfo
} from "./style";
import { motion } from "framer-motion";

const CATEGORIES = [
  { value: 'smartphones', label: 'Smartphones' },
  { value: 'laptops', label: 'Laptops' },
  { value: 'tablets', label: 'Tablets' },
  { value: 'mobile-accessories', label: 'Acessórios' },
  { value: 'mens-watches', label: 'Relógios' },
  { value: 'sports-accessories', label: 'Esportes' },
]

const PRODUCTS_PER_PAGE = 20;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export const Store = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<any>(getItem('carrinhostore') || []);
  const [loading, setLoading] = useState(true);
  const { setCartItemContext } = React.useContext(AuthContext);
  const { idCategory, setIdCategory } = React.useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const toastSuccess = () => toast.success('Adicionado ao carrinho!', { position: "top-right", autoClose: 1000, theme: "dark" });
  const toastError = () => toast.error('Removido do carrinho!', { position: "top-right", autoClose: 1000, theme: "dark" });

  // Debounce search input: 350ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch via API (category or search)
  useEffect(() => {
    setLoading(true);
    const skip = (page - 1) * PRODUCTS_PER_PAGE;
    const url = debouncedSearch.trim()
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedSearch.trim())}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
      : `https://dummyjson.com/products/category/${idCategory}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;

    fetch(url)
      .then(r => r.json())
      .then(json => {
        setData(json.products);
        setTotal(json.total);
        setLoading(false);
      });
  }, [idCategory, debouncedSearch, page]);

  setCartItemContext(cart.length);

  const handleClick = (obj: any) => {
    const element = cart.find((e: any) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e: any) => e.id !== obj.id);
      setCart(arrFilter);
      setItem('carrinhostore', arrFilter);
      setCartItemContext(cart.length - 1);
      toastError();
    } else {
      setCart([...cart, obj]);
      setItem('carrinhostore', [...cart, obj]);
      setCartItemContext(cart.length + 1);
      toastSuccess();
    }
  };

  const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PER_PAGE));

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <HeadStore>
        <div className="head-top">
          <div>
            <span className="section-label">Produtos</span>
            <TitleStore>Nossa Loja</TitleStore>
          </div>
          <SearchInput
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <CategoryPills>
          {CATEGORIES.map(cat => (
            <CategoryPill
              key={cat.value}
              active={idCategory === cat.value}
              onClick={() => {
                setIdCategory(cat.value);
                setPage(1);
                setSearchTerm('');
                setDebouncedSearch('');
              }}
            >
              {cat.label}
            </CategoryPill>
          ))}
        </CategoryPills>
      </HeadStore>

      {loading ? (
        <Loading />
      ) : (
        <>
          <ResultsInfo>
            {debouncedSearch.trim()
              ? <span><strong>{total}</strong> resultado{total !== 1 ? 's' : ''} para "<em>{debouncedSearch}</em>"</span>
              : <span><strong>{total}</strong> produto{total !== 1 ? 's' : ''} encontrado{total !== 1 ? 's' : ''}</span>
            }
            <span className="page-info">Página {page} de {totalPages}</span>
          </ResultsInfo>

          <StoreGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((e: any) => {
              const inCart = cart.some((item: any) => item.id === e.id);
              return (
                <motion.div
                  key={e.id}
                  variants={cardVariants}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -8 }}
                  style={{ height: '100%' }}
                >
                  <ProductCard inCart={inCart}>
                    <CardImage>
                      <img src={e.thumbnail} alt={e.title} />
                      {e.discountPercentage > 5 && (
                        <span className="badge-discount">-{Math.round(e.discountPercentage)}%</span>
                      )}
                    </CardImage>
                    <CardBody>
                      <CardCategory>{e.category}</CardCategory>
                      <CardTitle>{e.title}</CardTitle>
                      <CardBottom>
                        <div>
                          <CardPrice>
                            {e.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                          </CardPrice>
                          {e.rating && (
                            <CardRating>
                              <BsStarFill /> {e.rating.toFixed(1)}
                            </CardRating>
                          )}
                        </div>
                        <AddButton inCart={inCart} onClick={() => handleClick(e)}>
                          {inCart
                            ? <><BsFillCartCheckFill /> Adicionado</>
                            : <><BsFillCartPlusFill /> Adicionar</>
                          }
                        </AddButton>
                      </CardBottom>
                    </CardBody>
                  </ProductCard>
                </motion.div>
              );
            })}
          </StoreGrid>

          <Pagination>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
              <BsFillArrowLeftCircleFill />
            </button>
            <span>{page} / {totalPages}</span>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
              <BsFillArrowRightCircleFill />
            </button>
          </Pagination>
        </>
      )}
    </div>
  );
}
