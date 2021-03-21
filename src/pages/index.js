import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, Input, Icon, Text } from "@quarkly/widgets";
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
			<Box margin="70px 0px 0px 20px" quarkly-title="HeaderTitleBox" />
			<Image width="250px" height="64px" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/Podcaster.svg?v=2021-03-20T23:07:58.108Z" />
		</Section>
		<Section quarkly-title="SearchSection" background="--color-background">
			<Box quarkly-title="SearchBox" display="flex" max-width="max-content">
				<Input
					width="1260px"
					height="60px"
					background="#ffffff"
					border-color="#ffffff"
					border-radius="15px"
					box-shadow="3px 4px 10px 0 rgba(229, 235, 252, 0.5)"
				/>
				<Icon
					category="md"
					icon={MdSearch}
					min-height="100%"
					width="60px"
					color="--shadowActivePodcaster"
				/>
			</Box>
		</Section>
		<Section quarkly-title="BodySection" color="--fontGray" font="--text" background="--color-background">
			<Override slot="SectionContent" />
			<Box quarkly-title="NearestPodcasts" margin="0px 0px 40px 0px">
				<Text quarkly-title="Title" font="--t1" color="--black">
					Ближайшие подкасты
				</Text>
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
						<Components.CardWithTime>
							<Override slot="box1" />
							<Override slot="box" />
							<Override slot="box2" />
						</Components.CardWithTime>
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
						<Components.CardWithTime>
							<Override slot="box1" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /110% no-repeat scroll padding-box" />
						</Components.CardWithTime>
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
						<Components.CardWithTime>
							<Override slot="box1" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /110% no-repeat scroll padding-box" />
						</Components.CardWithTime>
						{"        "}{"    "}
					</StackItem>
				</Stack>
				<Box />
			</Box>
			<Box quarkly-title="TopWeekPodcasters" margin="0px 0px 40px 0px">
				<Text quarkly-title="Title" font="--t1" color="--black">
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
							<Components.Card>
								<Override slot="box" />
								<Override slot="box1" />
								<Override slot="text" />
							</Components.Card>
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
							<Components.Card>
								<Override slot="text" font="--t2" color="--black" />
								<Override slot="text1" color="--fontGray" font="--text">
									Максим Кац
								</Override>
								<Override slot="box" background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2065.png?v=2021-03-21T00:17:18.651Z) -5px/115% no-repeat" />
							</Components.Card>
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
							<Components.Card>
								<Override slot="text" font="--t2" color="--black">
									Что делать, если ваш партнёр вербальный агрессор?
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Горящая изба
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.png?v=2021-03-21T00:33:15.864Z) 0% 0% /100% no-repeat scroll padding-box" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
			<Box quarkly-title="BestLive" margin="0px 0px 40px 0px">
				<Text quarkly-title="Title" font="--t1" color="--black">
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
							<Components.Card>
								<Override slot="text" font="--t2" color="--black" />
								<Override slot="text1" color="--fontGray" font="--text" />
							</Components.Card>
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
							<Components.Card>
								<Override slot="text" font="--t2" color="--black" />
								<Override slot="text1" color="--fontGray" font="--text" />
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200%20(1).png?v=2021-03-21T00:42:52.986Z) 0% 0% /auto repeat scroll padding-box" />
							</Components.Card>
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
							<Components.Card>
								<Override slot="text" font="--t2" color="--black">
									#42 IT и политика | SEGOZAVTRA{"\n\n"}
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									LABELSMART{"\n\n"}
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.png?v=2021-03-21T00:40:46.426Z) 0% 0% /100% repeat scroll padding-box" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
		</Section>
		<Components.NavBar>
			<Override slot="box1" />
			<Override slot="link2" />
			<Override slot="link1" />
			<Override slot="SectionContent" />
		</Components.NavBar>
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