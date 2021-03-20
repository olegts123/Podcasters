import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"card"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-height="300px" sm-background="#777777" quarkly-title="main cards">
			<StackItem sm-display="flex">
				<Override slot="StackItemContent" sm-height="auto" />
				<Components.MainPageCard
					sm-width="162px"
					sm-height="auto"
					md-width="220px"
					lg-width="300px"
					lg-height="auto"
					width="350px"
					height="auto"
				>
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
				</Components.MainPageCard>
				<Components.Card />
				<Text font="--lead">
					Stack item
				</Text>
			</StackItem>
		</Section>
		<Section sm-height="600px" quarkly-title="podcaster cards">
			<Components.PodcasterCard />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});