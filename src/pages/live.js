import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"live"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection">
			<Box quarkly-title="HeaderTitleBox" margin="70px 0px 0px 20px" font="--t1">
				<Text quarkly-title="Title">
					Сейчас в эфире
				</Text>
			</Box>
		</Section>
		<Section quarkly-title="Main" background="#ffffff" height="1300px">
			<Box
				width="90%"
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="flex"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="550px"
				flex-wrap="wrap"
			>
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
						<Image
							width="5px"
							height="5px"
							margin="auto 10px auto 5px"
							quarkly-title="RedPoint"
							background="#ff0404"
							border-style="solid"
							border-color="#ffffff"
							border-radius="50%"
						/>
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text font="--text" margin="0px 0px 0px 0px" lg-height="50px">
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						22
						<br />
						{" "}:
						<br />
						{" "}00
					</Text>
				</Box>
			</Box>
			<Box
				width="670px"
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="flex"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="550px"
				flex-wrap="wrap"
			>
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
						<Image
							width="5px"
							height="5px"
							margin="auto 10px auto 5px"
							quarkly-title="RedPoint"
							background="#ff0404"
							border-style="solid"
							border-color="#ffffff"
							border-radius="50%"
						/>
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text font="--text" margin="0px 0px 0px 0px" lg-height="50px">
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						22
						<br />
						{" "}:
						<br />
						{" "}00
					</Text>
				</Box>
			</Box>
			<Box
				width="670px"
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="flex"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="550px"
				flex-wrap="wrap"
			>
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
						<Image
							width="5px"
							height="5px"
							margin="auto 10px auto 5px"
							quarkly-title="RedPoint"
							background="#ff0404"
							border-style="solid"
							border-color="#ffffff"
							border-radius="50%"
						/>
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text font="--text" margin="0px 0px 0px 0px" lg-height="50px">
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						22
						<br />
						{" "}:
						<br />
						{" "}00
					</Text>
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