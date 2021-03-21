import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { MdArrowBack, MdVolumeUp } from "react-icons/md";
import { GiBulletImpacts } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"livebroadcast"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection">
			<Override slot="SectionContent" />
			<Box
				quarkly-title="HeaderTitleBox"
				margin="75px 0px 0px 0px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="start"
			>
				<Icon category="md" icon={MdArrowBack} display="inline" margin="0px 4px 0px 0px" />
				<Text
					quarkly-title="Title"
					sm-font="--lgHeadline4"
					margin="0px 0px 16px 0px"
					display="inline"
					sm-margin="0px 0px 0 0px"
					font="--t1"
					lg-font="--lgHeadline2"
					md-font="--lgHeadline3"
				>
					Прямой эфир
				</Text>
			</Box>
			<Box quarkly-title="BroadcastTitleBox">
				<Text quarkly-title="BroadcastTitle">
					&lt;BroadcastName&gt;
				</Text>
				<Text quarkly-title="BroadcastDescription">
					&lt;BroadcastDescription&gt;
				</Text>
				<Text quarkly-title="Count" color="--grey">
					1.5к+
				</Text>
			</Box>
		</Section>
		<Section
			quarkly-title="BodySection"
			sm-flex-direction="column"
			sm-align-items="center"
			md-flex-direction="column"
			md-justify-content="space-evenly"
			sm-height="auto"
			sm-min-height="500px"
		>
			<Override
				slot="SectionContent"
				sm-margin="0px 0 0px 0"
				md-justify-content="space-around"
				md-height="500px"
				lg-height="600px"
				lg-justify-content="space-between"
				justify-content="space-between"
				height="800px"
			/>
			<Components.PodcasterCard sm-box-shadow="--podcastShadowActive" box-shadow="--podcastShadowActive">
				<Override slot="text">
					Анастасия Ивлеева
				</Override>
				<Override slot="box" background="#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bbadfd5684fdbc4c0c1006cf1b9a9b7d.jpg?v=2021-03-21T00:33:25.501Z) top/100%" />
			</Components.PodcasterCard>
			<Components.PodcasterCard>
				<Override slot="text" />
				<Override slot="box" background="#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bb4b277b65949db59997d7938661b118.jpg?v=2021-03-21T00:35:44.602Z) bottom/100%" />
			</Components.PodcasterCard>
			<Components.PodcasterCard>
				<Override slot="text1" sm-display="block" display="block" font="--text" />
				<Override slot="text">
					Покемон Пикачу
				</Override>
				<Override slot="box" background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Ash_Pikachu.png?v=2021-03-21T00:43:20.111Z) 0% 0%/100% no-repeat" />
			</Components.PodcasterCard>
		</Section>
		<Section quarkly-title="FooterSection">
			<Box display="flex" justify-content="space-between">
				<Box quarkly-title="AudioSticker">
					<Icon category="md" icon={MdVolumeUp} />
				</Box>
				<Components.BroadcastButton sm-box-shadow="--podcasterShadow" box-shadow="--podcasterShadow" />
				<Box quarkly-title="Sticker">
					<Icon category="gi" icon={GiBulletImpacts} />
				</Box>
			</Box>
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