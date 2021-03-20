import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
const defaultProps = {
	"sm-width": "162px",
	"sm-height": "221px",
	"sm-background": "#ffffff",
	"quarkly-title": "Card",
	"sm-display": "flex",
	"sm-flex-direction": "column"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Image",
			"sm-width": "162px",
			"sm-height": "162px",
			"sm-border-radius": "25%",
			"sm-background": "#8c8c8c",
			"sm-margin": "0px 0px 10px 0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Texts",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-justify-content": "start",
			"sm-align-items": "flex-start"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"sm-font": "normal 13px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name podcast",
			"sm-margin": "0 0px 5px 0px",
			"sm-max-height": "30px",
			"sm-min-height": "15px",
			"children": <>
				Почему никому невозможно верить{"\n\n"}
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"sm-height": "15px",
			"sm-font": "normal 12px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name's podcaster",
			"sm-margin": "0 0px 0 0px",
			"sm-border-color": "#4d4d4d",
			"sm-color": "--fontGray",
			"children": <>
				Так вышло{"\n\n"}
			</>
		}
	}
};

const MainPageCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(MainPageCard, { ...Box,
	defaultProps,
	overrides
});
export default MainPageCard;