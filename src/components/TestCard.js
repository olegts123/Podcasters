import React from 'react';
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import atomize from "@quarkly/atomize";
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Image",
			"sm-width": "162px",
			"sm-height": "162px",
			"sm-border-radius": "25%",
			"sm-margin": "0px 0px 10px 0px",
			"md-height": "220px",
			"md-border-radius": "25%",
			"lg-height": "300px",
			"lg-border-radius": "20%",
			"border-radius": "20%",
			"background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -5px/115% no-repeat",
			"lg-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -5px/110% no-repeat",
			"md-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -5px/110% no-repeat",
			"sm-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -3px/110% no-repeat",
			"height": "349px",
			"max-height": "349px"
		}
	}
};

const TestCard = ({
	title,
	description,
	time,
	imageURL,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...override("box")}>
		      
		<Box>
			        
			<img src={`${imageURL}`} />
			      
		</Box>
		      
		<Box>
			        
			<Box>
				          
				{`${title}`}
				        
			</Box>
			        
			<Box>
				          
				{`${description}`}
				        
			</Box>
			        
			<Box>
				          
				{`${time}`}
				        
			</Box>
			      
		</Box>
		    
	</Box>;
};

export default atomize(TestCard)({
	name: "TestCard",
	effects: {
		hover: ":hover"
	},
	overrides,
	normalize: true,
	mixins: true,
	description: {
		en: "TestCard — my awesome component"
	},
	propInfo: {
		title: {
			control: "input"
		},
		description: {
			control: "input"
		},
		time: {
			control: "input"
		},
		imageUrl: {
			control: "input"
		}
	}
});