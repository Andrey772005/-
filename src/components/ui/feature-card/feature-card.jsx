import React from "react";
import Title, {TitleSize} from "../title/title";

function FeatureCard() {
	return (
		<article className="feature-card">
			<span className="feature-card__feature">Фермерские продукты</span>
			<Title size={TitleSize.SMALL}>Еда намного вкуснее</Title>
			<p className="feature-card__text">Домашняя колбаса из мяса,
				соли и специй и колбаса из магазина —
				два настолько разных продукта,
				что они даже не родственники
			</p>
		</article>
	);
}

export default FeatureCard;
