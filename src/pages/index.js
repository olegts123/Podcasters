import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdSearch } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection" lg-border-color="#000000" background="#fcfcfc">
			<Box margin="70px 0px 0px 20px" quarkly-title="HeaderTitleBox">
				<Text
					display="inline"
					color="#FED851"
					font="24px sans-serif"
					text-align="left"
					quarkly-title="Logo"
				>
					Podcaster
				</Text>
			</Box>
		</Section>
		<Section quarkly-title="SearchSection">
			<Box quarkly-title="SearchBox" display="flex" max-width="max-content">
				<Input />
				<Icon category="md" icon={MdSearch} min-height="100%" />
			</Box>
		</Section>
		<Section quarkly-title="BodySection">
			<Box quarkly-title="NearestPodcasts" margin="0px 0px 40px 0px">
				<Text quarkly-title="Title" font="700 16px --fontFamily-googleRoboto">
					Ближайшие подкасты
				</Text>
				<Box>
					<Stack
						sm-flex-wrap="nowrap"
						sm-justify-content="space-between"
						md-justify-content="space-between"
						md-flex-wrap="nowrap"
						justify-content="space-between"
						flex-wrap="nowrap"
						sm-padding="0px 10px 0px 10px"
					>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Override slot="StackItemContent" />
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							md-overflow-x="hidden"
							width="auto"
							overflow-x="hidden"
							overflow-y="hidden"
							min-width="350px"
							lg-display="none"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
			<Box quarkly-title="TopWeekPodcasters" margin="0px 0px 40px 0px">
				<Text quarkly-title="Title" font="--t1">
					Подкастеры недели
				</Text>
				<Box>
					<Stack
						sm-flex-wrap="nowrap"
						sm-justify-content="space-between"
						md-justify-content="space-between"
						md-flex-wrap="nowrap"
						justify-content="space-between"
						flex-wrap="nowrap"
						sm-padding="0px 10px 0px 10px"
					>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Override slot="StackItemContent" />
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							md-overflow-x="hidden"
							width="auto"
							overflow-x="hidden"
							overflow-y="hidden"
							min-width="350px"
							lg-display="none"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
			<Box quarkly-title="BestLive" margin="0px 0px 40px 0px">
				<Text quarkly-title="Title" font="--t1">
					Лучшие эфиры
				</Text>
				<Box>
					<Stack
						sm-flex-wrap="nowrap"
						sm-justify-content="space-between"
						md-justify-content="space-between"
						md-flex-wrap="nowrap"
						justify-content="space-between"
						flex-wrap="nowrap"
						sm-padding="0px 10px 0px 10px"
					>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Override slot="StackItemContent" />
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							md-overflow-x="hidden"
							width="auto"
							overflow-x="hidden"
							overflow-y="hidden"
							min-width="350px"
							lg-display="none"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card />
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
		</Section>
		<Components.NavBar />
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