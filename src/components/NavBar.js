import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Icon, Box } from "@quarkly/widgets";
import { MdAccessibility, MdHome, MdLiveTv } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
const defaultProps = {
	"quarkly-title": "NavBar",
	"sm-position": "fixed",
	"sm-bottom": 0,
	"sm-top": "auto"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"flex-direction": "row",
			"justify-content": "space-around",
			"quarkly-title": "NavBox"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdAccessibility,
			"quarkly-title": "ProfileIcon"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdHome,
			"quarkly-title": "HomeIcon"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "StartLive",
			"lg-display": "block",
			"lg-background": "#ff0003",
			"lg-border-radius": "20px",
			"lg-right": "10px",
			"lg-border-width": "10px",
			"lg-border-style": "solid",
			"lg-border-color": "rgba(0, 0, 0, 0)",
			"lg-hover-cursor": "pointer",
			"position": "fixed",
			"bottom": "3%",
			"right": "32%",
			"cursor": "pointer",
			"background": "#ff0b0b",
			"border-radius": "20px",
			"border-width": "10px",
			"border-style": "solid",
			"border-color": "rgba(0, 0, 0, 0)"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "ti",
			"icon": TiPlus,
			"lg-display": "block",
			"lg-margin": "0px auto 0px auto",
			"display": "block"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdLiveTv,
			"quarkly-title": "LiveIcon"
		}
	}
};

const NavBar = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Icon {...override("icon")} />
			<Icon {...override("icon1")} />
			<Box {...override("box1")}>
				<Icon {...override("icon2")} />
			</Box>
			<Icon {...override("icon3")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(NavBar, { ...Section,
	defaultProps,
	overrides
});
export default NavBar;