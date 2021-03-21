import React, { useState, Fragment } from 'react';
import atomize from "@quarkly/atomize";
import { AudioController } from "hackaton-uikit-audio-controller";
const contoller = new AudioController("https://syleront.cf:4444");
import CastersSection from "./CastersSection";
import ListenersSection from "./ListenersSection";
import FooterListeners from "./FooterListeners";
import FooterBroadcasters from "./Footer";

const BroadcastersPanel = props => {
	const [panel, setPanel] = useState("broadcasters");
	console.log(panel);
	return <div {...props}>
		      
		{panel === "broadcasters" ? <Fragment>
			            
			<CastersSection />
			            
			<FooterBroadcasters onClick={() => setPanel("listeners")} />
			          
		</Fragment> : <Fragment>
			            
			<ListenersSection />
			            
			<FooterListeners />
			          
		</Fragment>}
		    
	</div>;
};

export default atomize(BroadcastersPanel)({
	name: "BroadcastersPanel",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "BroadcastersPanel — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});