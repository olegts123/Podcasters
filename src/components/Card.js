import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import MainPageCard from "./MainPageCard";
const defaultProps = {
	"sm-width": "162px",
	"sm-height": "auto",
	"md-width": "220px",
	"lg-width": "300px",
	"lg-height": "auto",
	"width": "350px",
	"height": "auto"
};
const overrides = {};

const Card = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <MainPageCard {...rest}>
		<Override
			slot="box"
			sm-width="162px"
			sm-height="162px"
			md-height="220px"
			md-background="#4f4f4f"
			md-border-radius="25%"
			lg-height="300px"
			lg-background="#525050"
			lg-border-radius="20%"
			height="350px"
			border-radius="20%"
			background="#555555"
		/>
		<Override
			slot="text1"
			md-font="14px sans-serif"
			md-min-height="10px"
			lg-min-height="14px"
			min-height="18ox"
			font="20px sans-serif"
		/>
		<Override
			slot="text"
			md-min-height="10px"
			lg-min-height="14px"
			lg-font="18px sans-serif"
			min-height="18px"
			font="24px sans-serif"
		/>
		{children}
	</MainPageCard>;
};

Object.assign(Card, { ...MainPageCard,
	defaultProps,
	overrides
});
export default Card;