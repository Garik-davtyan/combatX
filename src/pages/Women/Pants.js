import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// navigate not used for modal flow
import { addToCart } from "../../utils/cartStorage";
import { useLang } from "../../i18n/LangContext";
import logo2 from "../../image/combatXblack.jpg";
import "../../styles/pageCommon.css";
import products from '../../data/products';
// no season filter or image switching — static first image shown for each product

export default function Pants() {
	const [addedIds, setAddedIds] = useState([]);
	const { t } = useLang();

	// show only pants
	const filtered = products.filter(p => p.category === 'pants');

	const navigate = useNavigate();
	const openProductPage = (product) => { navigate(`/product/${product.id}`); };

	return (
		<div className="page-container">
			<img src={logo2} alt="logo" className="page-logo" />
			<h2>Pants</h2>
			<div className="cards-row">
				{filtered.map((product)=> (
					<div className="product-card" key={product.id} onClick={() => openProductPage(product)} role="button" tabIndex={0}>
						<div style={{position:'relative',width:'100%'}}>
								<img src={product.images[0]} alt={product.title} className="product-card-img" />
							</div>
						<div className="product-card-body">
							<h3 className="product-card-title">{product.title}</h3>
							<p className="product-card-desc">{product.desc}</p>
							<div className="product-card-bottom" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
								<div className="price-row" style={{display:'flex',alignItems:'center',gap:12}}>
									{product.oldPrice > 0 && (<span className="old-price">{product.oldPrice} դրամ</span>)}
									<span className="product-card-price">{product.price} դրամ</span>
								</div>
								<div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
									<button className="product-card-btn" onClick={(e)=>{e.stopPropagation(); addToCart(product); setAddedIds(s=>[...s,product.id]); setTimeout(()=>setAddedIds(s=>s.filter(id=>id!==product.id)),1600);}}>{t('addToCart')}</button>
									{addedIds.includes(product.id) && (<div style={{fontSize:12,color:'#0a0',background:'#f0fff0',padding:'6px 8px',borderRadius:6,border:'1px solid #bfe6bf',marginTop:6}}>{t('addedToCart')}</div>)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* product and contact modals removed here: product page is separate (uses /product?id=ID) */}
		</div>
	);
}

