import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
import BackArrow from "./BackArrow";
const defaultProps = {
	"quarkly-title": "HeaderSection",
	"background": "--color-background"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "HeaderTitleBox",
			"margin": "50px 0px 0px 15px",
			"sm-display": "flex",
			"sm-align-items": "center",
			"sm-justify-content": "start",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-start",
			"md-margin": "50px 0px 0px 0"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center"
		}
	},
	"backArrow": {
		"kind": "BackArrow",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Title",
			"sm-font": "--t1",
			"margin": "0px 0px 0 0px",
			"display": "inline",
			"sm-margin": "0px 0px 0 0px",
			"font": "--t1",
			"lg-font": "--t1",
			"md-font": "--lgHeadline3",
			"children": "Прямой эфир"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"quarkly-title": "BroadcastTitleBox"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"quarkly-title": "BroadcastTitle",
			"font": "--t2",
			"children": "Презентация Podcaster"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"quarkly-title": "BroadcastDescription",
			"font": "--text",
			"color": "--fontGray"
		}
	}
};

const HeaderSection = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<BackArrow {...override("backArrow")} />
				<Text {...override("text")} />
			</Box>
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text1")} />
			<Text {...override("text2")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(HeaderSection, { ...Section,
	defaultProps,
	overrides
});
export default HeaderSection;