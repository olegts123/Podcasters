import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"livebroadcastmembers"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection" background="--color-background">
			<Box
				quarkly-title="HeaderTitleBox"
				margin="50px 4px 0px 0px"
				sm-display="flex"
				sm-min-height={0}
				sm-align-items="center"
				sm-height="auto"
				display="flex"
				height="auto"
				align-items="center"
				justify-content="start"
			>
				<Image width="64px" height="64px" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/5.svg?v=2021-03-21T07:26:15.829Z" md-margin="0px 0px 0px -10px" />
				<Text
					quarkly-title="Title"
					margin="px 0 0 4px"
					display="inline"
					sm-margin="px 0px 0 4px"
					font="--t1"
					lg-font="--lgHeadline2"
					md-font="--lgHeadline3"
					sm-font="normal normal 500 16px/120% --fontFamily-sans"
				>
					Прямой эфир
				</Text>
			</Box>
			<Box quarkly-title="BroadcastTitleBox">
				<Text quarkly-title="BroadcastTitle" font="--t2">
					Презентация Podcaster
				</Text>
				<Text quarkly-title="BroadcastDescription" font="--text" color="--fontGray">
					Презентация уникальной стриминговой платформы
				</Text>
			</Box>
			<Section quarkly-title="BodySection" justify-content="end" background="--color-background">
				<Override
					slot="SectionContent"
					sm-width="100%"
					sm-height="auto"
					width="100%"
					height="auto"
					min-height="1000px"
					padding="0px 30px 0px 30px"
					align-items="center"
				/>
				<Components.DonateListeners background="#ffffff">
					<Override slot="text" />
					<Override slot="box" />
					<Override slot="image" color="rgba(0, 0, 0, 0)" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8.png?v=2021-03-21T08:24:28.844Z" />
				</Components.DonateListeners>
				<Components.DonateListeners
					margin="0px 0px 40px 0px"
					lg-margin="0px 0px 30px 0px"
					sm-margin="0px 0px 10px 0px"
					md-margin="0px 0px 20px 0px"
					background="#ffffff"
				>
					<Override slot="box2" font="--t2" />
					<Override slot="text" font="--t2" />
					<Override slot="box" />
					<Override slot="image" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8.png?v=2021-03-21T08:24:28.844Z" />
				</Components.DonateListeners>
				<Components.PlebsListener
					padding="30px 0px 30px 0px"
					lg-padding="20px 0px 20px 0px"
					md-padding="15px 0px 15px 0px"
					sm-padding="15px 0px 15px 0px"
					background="#ffffff"
				>
					<Override slot="text" font="--t2" />
				</Components.PlebsListener>
				<Stack width="100%" font="--t2">
					{"    "}
					<StackItem width="50%" display="flex">
						<Stack flex-direction="column" width="100%">
							{"    "}
							<StackItem width="50%" display="flex">
								{"        "}{"    "}
							</StackItem>
							<Components.PlebsListener color="#000000" background="#ffffff">
								<Override slot="text" font="--t2" />
							</Components.PlebsListener>
							{"    "}
							<Components.PlebsListener color="#000000" background="#ffffff">
								<Override slot="text" font="--t2" />
							</Components.PlebsListener>
							<Components.PlebsListener color="#000000" background="#ffffff">
								<Override slot="text" font="--t2" />
							</Components.PlebsListener>
						</Stack>
						{"        "}{"    "}
					</StackItem>
					{"    "}
					<StackItem width="50%" display="flex">
						<Stack flex-direction="column" width="100%">
							{"    "}
							<StackItem width="50%" display="flex">
								{"        "}{"    "}
							</StackItem>
							<Components.PlebsListener color="#000000" background="#ffffff">
								<Override slot="text" font="--t2" />
							</Components.PlebsListener>
							{"    "}
							<Components.PlebsListener color="#000000" background="#ffffff">
								<Override slot="text" font="--t2" />
							</Components.PlebsListener>
							<Components.PlebsListener color="#000000" background="#ffffff">
								<Override slot="box" font="--t2" />
								<Override slot="text" font="--t2" />
							</Components.PlebsListener>
							<StackItem width="50%" display="flex">
								{"        "}{"    "}
							</StackItem>
						</Stack>
						{"        "}{"    "}
					</StackItem>
				</Stack>
			</Section>
		</Section>
		<Section quarkly-title="FooterSection">
			<Box height="28px">
				<Components.BroadcastButton
					max-width="50%"
					width="150px"
					height="42px"
					margin="0px auto 0px auto"
					box-shadow="--shadow"
				>
					<Override
						slot="box"
						width="80px"
						height="30px"
						box-shadow="--shadow"
						margin="4px 0px 0px 50%"
						position="relative"
						top="15%"
						background="#922bb7"
						right="3%"
					/>
				</Components.BroadcastButton>
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