import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { getItem, setItem } from "../../services/LocalStorage";
import { Loading } from "../../components/loading/Loading";
import { AuthContext } from "../../providers/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsArea } from "../../css/styled";
import { HeadStore, TitleStore, SelectStore, Pagination } from "./style";


export const Store = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState<any>(getItem('carrinhostore') || []);
    const [loading, setLoading] = useState(true);
    const { setCartItemContext } = React.useContext(AuthContext);
    const { idCategory, setIdCategory } = React.useContext(AuthContext);
    const [page, setPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [searchTerm, setSearchTerm] = useState("");

    const sucess = () => toast.success('Adicionado ao Cart!',
        {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }
    );
    const error = () => toast.error('Removido do Cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    })

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.mercadolibre.com/sites/MLB/search?q=${idCategory}`
            const response = await fetch(url)
            const dataJson = await response.json()
            setData(dataJson.results)
            setLoading(false)

        }
        fetchApi()
    }, [idCategory])

    setCartItemContext(cart.length)

    const handleClick = (obj: any) => {
        const element = cart.find((e: any) => e.id === obj.id);
        if (element) {
            const arrFilter = cart.filter((e: any) => e.id !== obj.id);
            setCart(arrFilter);
            setItem('carrinhostore', arrFilter);
            setCartItemContext(cart.length - 1)
            error()

        } else {
            setCart([...cart, obj]);
            setItem('carrinhostore', [...cart, obj]);
            setCartItemContext(cart.length + 1)
            sucess()

        }
    }

    const getCurrentProducts = () => {
        const filteredData = data.filter((product: any) =>
            product.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
        );

        const lastIndex = page * productsPerPage;
        const firstIndex = lastIndex - productsPerPage;
        const skippage = page + 5
        const lastPage = Math.ceil(data.length / productsPerPage);

        if (page < 1) {
            setPage(1)

        } else if (page > lastPage) {
            setPage(page - 1)

        }

        return filteredData.slice(firstIndex, lastIndex);
    };

    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div>
                        <HeadStore>
                            <div>
                                <TitleStore>Store</TitleStore>
                            </div>
                            <SelectStore>
                                <select onChange={(e) => setIdCategory(e.target.value)}>
                                    <option value="" disabled selected>Selecione uma categoria</option>
                                    <option value="games">Games</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="Câmeras e Acessórios">Câmeras e Acessórios</option>
                                    <option value="Celulares e Telefones">Celulares e Telefones</option>
                                    <option value="Eletrônicos, Áudio e Vídeo">Eletrônicos, Áudio e Vídeo</option>
                                    <option value="Informática">Informática</option>
                                </select>
                            </SelectStore>
                            <div>
                                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>

                        </HeadStore>
                        <ProductsArea data-aos="fade-up" className="list">
                            {getCurrentProducts().map((e: any) => (
                                <div key={e.id}>
                                    <img src={e.thumbnail}></img>
                                    <h3>{e.title}</h3>
                                    <h4>{e.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h4>
                                    <button
                                        onClick={() => handleClick(e)}>
                                        {
                                            cart.some((itemCart: any) => itemCart.id === e.id) ? (
                                                <BsFillCartCheckFill style={{ color: 'green' }} />
                                            ) : (
                                                <BsFillCartPlusFill />
                                            )
                                        }
                                    </button>
                                </div>
                            ))}
                        </ProductsArea>

                        <Pagination>
                            <div>
                                <BsFillArrowLeftCircleFill onClick={() => setPage(page - 1)} />
                            </div>
                            <div>
                                <div>{page}</div>
                            </div>
                            <div>
                                <BsFillArrowRightCircleFill onClick={() => setPage(page + 1)} />
                            </div>
                        </Pagination>

                    </div>
                )
            }
        </>
    )
}
