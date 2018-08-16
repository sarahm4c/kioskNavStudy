## Install Fonts ##

Utils.insertCSS """
	@font-face {
		font-family: 'Archer-Semibold';
		font-weight: 400;
		src: url('./fonts/Archer-Semibold.otf') format("opentype");
	}
	@font-face {
		font-family: 'Archer-Medium';
		font-weight: 400;
		src: url('./fonts/Archer-Medium.otf') format("opentype");
	}
	@font-face {
		font-family: 'Calibre-Medium';
		font-weight: 400;
		src: url('./fonts/Calibre-Medium.otf') format("opentype");
	}
	@font-face {
		font-family: 'Calibre-Regular';
		font-weight: 400;
		src: url('./fonts/Calibre-Regular.otf') format("opentype");
	}
"""

## Device Type - iPad Air, Landscape ##
Framer.Device.deviceType = "apple-ipad-air-2-silver"
Framer.Device.orientation = 90
background = new BackgroundLayer

## Colors ##
white = new Color ("#FFF")
black = new Color ("#000")
blue = new Color ("#02CCD0")
spacer = new Color("rgba(2,204,208,.3)")
medGreen = new Color ("#6B9F62")
dkGreen = new Color ("#4C753F")
dkGreyTxt = new Color ("#35383D")
ltGreyTxt = new Color ("#6F6F75")
disabledTxt = new Color ("#949499")
ltGreyBg = new Color ("#F1F1F1")
clear = "rgba(255,255,255,0)"

## SVG ##
bagelSVG = """
<svg  viewBox="-4 4 48 48"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g stroke="#4C753F" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
			<g transform="translate(3.000000, 4.000000)">				<path d="M1.4333,20.2888 C7.6323,31.3808 27.2643,28.9668 37.0553,22.0368 C37.3883,21.8018 37.9693,21.4438 38.5673,21.0348 C38.7383,20.9178 38.9743,21.0378 38.9673,21.2458 C38.9493,21.8308 38.6503,22.8198 38.5263,23.1498 C33.7753,35.7468 6.4433,35.3188 1.9953,25.0248" ></path>
				<path d="M39.3777,15.6516 L40.8317,17.0026 C41.4227,17.5516 41.1487,18.5396 40.3587,18.7056 L11.8867,24.6686 C11.0287,24.8486 10.1347,24.6416 9.4427,24.1036 L2.3177,18.7796 C2.0007,18.5336 2.0767,18.0346 2.4527,17.8946" ></path>
				<path d="M34.4187,15.4763 C31.2327,21.5823 1.1207,24.0763 0.7527,10.7683 C0.3387,-4.2347 45.2997,-1.7187 37.4537,13.8643" ></path>
				<path d="M29.5886,7.7581 C27.4056,12.7671 10.4636,11.3051 11.3126,8.7231 C11.9646,6.7371 19.1346,6.5641 25.3676,7.9511" ></path>
			</g>
		</g>
	</g>
</svg>
		"""
		
sandwichSVG = """

<svg width="48px" height="48px" viewBox="-4 4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g  stroke="#4C753F" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
			<g  transform="translate(1.000000, 4.000000)">
				<path d="M3.55398261,28.1698435 C4.8792,29.9625391 7.60372174,31.5705391 10.2938087,31.9305391 C19.3418087,33.1409739 37.7696348,28.5444522 44.2298087,23.5889739 C47.1703304,21.3329739 46.8698087,18.9100174 46.4878957,17.2926261 C46.3084174,16.530887 45.1710261,14.6181913 42.6687652,14.0964522" ></path>
				<path d="M4.76765217,25.7808 C6.47582609,26.4204522 9.38713043,27.5933217 12.506087,27.5265391 C22.9273043,27.3042783 35.6577391,23.4058435 42.2806957,19.7651478 C44.2591304,18.6778435 43.9638261,17.7115826 43.3106087,17.066713" ></path>
				<path d="M45.316487,9.80963478 C46.2076174,9.88372174 46.8973565,10.3063304 46.5864,11.1953739 C45.6639652,13.8322435 44.3335304,13.1696348 41.8114435,14.4969391 C39.2893565,15.8242435 39.9519652,18.4788522 37.828487,19.6736348 C35.7050087,20.8684174 33.964487,18.0395478 30.6462261,18.0395478 C27.3279652,18.0395478 28.8024,21.2659826 25.4841391,22.8593739 C22.1658783,24.4517217 21.4354435,20.8016348 18.5147478,21.3327652 C15.5961391,21.8638957 15.6618783,23.5230261 12.4761391,24.5842435 C9.29144348,25.6465043 8.01109565,22.1988522 6.02013913,20.8715478 C4.02918261,19.5432 2.49213913,19.8625043 1.43196522,21.0698087 C0.438573913,22.2009391 0.601356522,23.1056348 1.80031304,24.1752" ></path>
				<path d="M5.52166957,18.3170087 C7.00445217,18.780313 8.12097391,18.9879652 11.8180174,18.8679652 C17.9411478,18.6676174 37.3404522,13.8154435 42.4555826,10.2864 C43.4260174,9.55909565 43.5136696,8.09613913 43.5136696,7.67353043 C43.5157565,3.91492174 40.3623652,2.24744348 38.1470609,1.42622609 C35.7616696,0.541356522 32.9568,0.688486957 30.7174957,1.1517913 C28.1401043,1.6850087 26.9901913,3.35353043 28.6023652,4.63387826 C34.7286261,9.49961739 37.7254957,4.67457391 29.4872348,2.15666087 C28.5220174,1.86135652 27.5808,1.62553043 25.9373217,1.80396522 C23.5540174,2.06274783 20.7648,2.6450087 18.8886261,3.59144348 C17.0134957,4.53683478 16.6795826,5.83596522 18.7352348,7.39909565 C25.1077565,12.2439652 29.0030609,9.30135652 22.1202783,5.73996522 C16.3905391,2.77544348 6.37523478,6.39109565 9.17906087,9.72187826 C13.0274087,14.2954435 19.8131478,12.8366609 12.5630609,8.32883478 C9.87401739,6.65613913 9.67575652,6.81683478 6.77593043,7.68605217 C3.65488696,8.62205217 1.14427826,11.2297043 1.45836522,13.8175304 C1.6274087,15.1980522 2.15645217,16.1236174 2.76271304,16.7601391" ></path>
			</g>
		</g>
	</g>
</svg>
"""

kidsSVG = """
<svg width="48px" height="48px" viewBox="0 3 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g  stroke="#4C753F" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
			<g  transform="translate(2.000000, 2.000000)">
				<path d="M28.2892959,19.5779388 C28.8265408,16.0651837 29.2664388,15.4094694 29.6236837,13.7242653 C30.0507245,11.708449 32.8398061,11.905898 32.6056224,13.9869184 C32.4540918,15.3378367 31.8948061,18.2086531 31.746949,19.7524286 C31.6826633,20.421 32.5312347,20.6873265 33.0923571,19.628449 C34.0924592,17.7430408 35.5425612,14.3349796 35.8465408,13.5598776 C36.6179694,11.590898 39.5622551,12.4275306 38.7348061,14.8648776 C38.1681735,16.5326327 36.1991939,19.600898 35.5783776,21.0537551 C35.3891939,21.4973265 36.0008265,21.8279388 36.3286837,21.5845714 C37.6107245,20.6313061 39.9690918,17.7696735 40.5100102,17.0037551 C41.5661327,15.5068163 43.7233776,16.9091633 42.5717449,18.6788571 C41.8232755,19.8286531 39.7468469,22.2917143 38.3307245,23.4286531 C37.3985816,24.1771224 38.3371531,25.0807959 39.3271531,24.7740612 C40.4337857,24.4305918 41.5808265,23.3028367 42.5579694,22.4248776 C43.9401122,21.1832449 45.4737857,22.4065102 44.2679694,24.2267143 C43.2687857,25.7374286 40.4466429,28.1233469 38.1617449,30.196102 C36.3525612,31.8372245 35.3680714,32.3046735 33.8656224,32.6591633 C33.062051,32.8483469 32.1831735,34.056 32.2933776,34.7512041" ></path>
				<path d="M22.5360918,34.1413163 C25.4151735,34.2634592 26.1948673,32.457949 25.446398,31.2842755 C23.1633367,27.705398 22.1448673,23.3431531 21.6967041,19.8386633 C21.3045612,16.7814184 24.9018061,16.3066224 25.4721122,18.7650918 C26.5218061,23.2889694 28.3998673,24.042949 29.4761939,25.2570306 C29.8710918,25.7024388 30.1594592,26.2102959 30.2577245,26.9881531 C30.4735408,28.6852959 28.2474184,28.7321327 27.6128265,25.7988673" ></path>
				<path d="M15.4429898,16.956 C14.4107449,18.4951837 13.0377857,17.3114082 13.4565612,15.9862041 C13.9478878,14.4314082 15.1491122,14.1788571 16.5551327,13.2476327 C17.6691122,12.5101837 18.9125816,11.3475306 20.0339082,8.77426531 C21.0082959,6.54079592 23.8699286,7.48946939 22.9377857,10.4282449 C21.8688061,13.795898 21.0615612,15.8732449 17.8289082,19.7147755 C16.0674796,21.8077347 16.0996224,24.1863061 16.9977857,26.3894694" ></path>
				<path d="M6.78664286,11.7606122 C6.9795,11.43 6.85827551,11.0966327 6.67919388,10.8936735 C5.38062245,9.42428571 3.99664286,7.11183673 3.50990816,5.94918367 C2.69347959,4.00316327 5.34021429,2.97734694 6.11164286,4.63867347 C6.47164286,5.41377551 7.77296939,8.055 8.83092857,9.36826531 C9.22766327,9.86234694 10.1423571,9.5905102 10.0385816,8.89163265 C9.79888776,7.27071429 8.8722551,4.43846939 8.63715306,2.84969388 C8.25878571,0.303061224 11.5364388,-0.0293877551 11.9423571,2.04612245 C12.1039898,2.86806122 12.1701122,6.1677551 12.8203163,8.14959184 C13.179398,9.24244898 14.0821531,8.86959184 14.2208265,8.20193878 C14.5927653,6.39826531 14.7351122,4.33653061 14.8499082,2.84693878 C15.0106224,0.758571429 18.1183776,1.09836735 18.0504184,3.15734694 C17.9971531,4.75163265 17.762051,6.28255102 17.2312347,9.4555102" ></path>
				<path d="M8.54981633,24.5258265 C10.2680816,22.5779694 8.18706122,19.8439898 6.36502041,17.6123571 C4.41440816,15.2227653 1.67767347,12.9250102 0.917265306,11.2811327 C0.0438979592,9.39113265 1.87144898,8.33409184 2.99369388,9.41868367 C3.2967551,9.71256122 3.75685714,10.2516429 4.53930612,10.9358265" ></path>
			</g>
		</g>
	</g>
</svg>
"""

croissantSVG = """

<svg width="48px" height="48px" viewBox="0 4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g  stroke="#4C753F" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
			<g  transform="translate(4.000000, 6.000000)">
				<path d="M8.5677,19.9155 C6.3957,18.5745 5.1837,17.4365 4.0427,15.7605 C3.6597,15.1975 2.4507,14.3505 1.7917,16.0075 C-0.5983,22.0215 1.4837,27.1345 4.4057,27.2515 C6.2667,27.3265 7.0277,26.4265 7.9757,24.9955 C8.8927,23.6135 10.0987,22.2375 11.3797,22.0815 C12.8207,21.9055 15.9147,20.3265 13.4507,19.2155 C10.4947,17.8835 4.8027,13.1395 4.9167,11.5145 C5.0417,9.7245 6.1107,7.7235 8.6817,6.2995" ></path>
				<path d="M32.6205,19.936 C34.7335,18.613 36.0615,17.397 37.1765,15.761 C37.5585,15.197 38.7675,14.35 39.4265,16.007 C41.8165,22.022 39.7345,27.134 36.8125,27.252 C34.9515,27.327 34.1895,26.426 33.2415,24.996 C32.3255,23.613 31.1195,22.238 29.8395,22.082 C28.3975,21.906 25.3045,20.326 27.7675,19.216 C30.7245,17.883 36.4155,13.14 36.3015,11.515 C36.2075,10.16 34.6755,7.937 32.0395,6.492" ></path>
				<path d="M14.7445,23.1333 C15.6665,23.4853 16.3065,23.5473 17.7985,23.3953 C19.4355,23.2283 19.5345,21.7653 18.7995,21.1213 C15.9065,18.5913 12.6405,10.8333 12.2435,7.0183 C11.8655,3.4033 13.5055,2.0353 16.1875,1.2693 C18.7485,0.5393 22.6185,0.6123 25.0465,1.2793 C27.4815,1.9493 29.3525,3.4033 28.9745,7.0183 C28.5775,10.8333 25.3115,18.5913 22.4195,21.1213 C21.6835,21.7653 22.0655,23.1093 23.4205,23.3953 C24.0575,23.5303 24.3715,23.6083 25.6625,23.1943" ></path>
			</g>
		</g>
	</g>
</svg>
"""

coffeeSVG = """

<svg width="48px" height="48px" viewBox="6 4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
		<g  stroke="#4C753F" stroke-width="1.5">
			<g  transform="translate(6.000000, 0.000000)">
				<path d="M16.4697,13.8148 C19.8997,13.2798 23.9417,13.2168 26.2297,13.4078 C32.7917,13.9548 31.7237,17.3588 21.6137,17.3138 C8.6457,17.2558 8.2237,5.7898 22.2897,6.4368 C31.9697,6.8818 30.6857,0.7498 23.1027,0.7498" ></path>
				<path d="M15.122,10.7444 C23.704,8.9464 36.267,10.5694 35.604,15.6364 C35.261,18.2664 28.492,20.2624 21.975,20.3824 C16.086,20.4924 10.126,18.8874 10.126,16.8474" ></path>
				<path d="M11.8134,11.6956 C8.9914,12.7836 7.1664,14.4066 7.4014,16.5636 C7.7134,19.4236 8.4924,24.1646 8.8214,26.3496 C9.1034,28.2176 9.1474,30.8156 7.3154,31.4536 C2.6614,33.0766 -2.0506,21.4786 2.7814,19.7876 C8.9064,17.6436 5.3894,38.8066 21.6784,38.8066 C35.9774,38.8066 35.6284,26.6516 35.5094,21.3956 C35.5064,21.2296 35.5444,20.9236 35.7494,20.8596" ></path>
			</g>
		</g>
	</g>
</svg>
"""

### Icons ###

bagelICO = "images/ICO/bagelICO.png"
coffeeICO = "images/ICO/coffeeICO.png"
croissantICO = "images/ICO/croissantICO.png"
kidsICO = "images/ICO/kidsICO.png"
sandwichICO = "images/ICO/sandwichICO.png"

## Font Styles ##
#  "fontStyle fontWeight fontSize/lineHeight fontFamily"  #
H1 =
	font: "600 40px/1.1 Archer-Semibold"
	textAlign: "center"
	color: dkGreyTxt
	letterSpacing: -0.89
	padding:
		top: -4
		bottom: -4

nav1 = 
	fontSize: 20
	textAlign: "center"
	letterSpacing: 0.2
	lineHeight: 1.2
	textTransform: "uppercase"
	padding:
		top: -4
		bottom: -4
	fontFamily: "Calibre-Regular"
	color: ltGreyTxt

nav1ON =
	fontFamily: "Calibre-Medium"
	color: dkGreyTxt


subnav = 
	fontSize: 20
	textAlign: "justify"
	letterSpacing: 0
	lineHeight: 1
	padding:
		top: -4
		bottom: -4
		right: 30
		left: 30
	fontFamily: "Calibre-Regular"
	color: ltGreyTxt

subnavON =
	fontFamily: "Calibre-Medium"
	color: dkGreyTxt

headline = new TextLayer
	font: H1.font
	textAlign: H1.textAlign
	color: H1.color
	letterSpacing: H1.letterSpacing
	padding: H1.padding
	
	x: Align.center
	y: 24
	text: "Good morning."
	width: Screen.width









class navButt extends Layer
	constructor: (options={})->
		options.y ?= 101
		options.x ?= 190
# 		options.parent ?= mainNav
		options.height ?= mainNav.height
		options.width ?= 102
		options.backgroundColor ?= null
		options.borderWidth ?= null
		options.opacity ?= 1
		options.active ?= false
		if options.active is false
			options.fontFamily = nav1.fontFamily
			options.color = nav1.color
		super options

		navIcon = new Layer
			parent: @
			midX: @.midX
			y: 0
			width: 48
			height: 48
			backgroundColor: null

		asset = new Layer
			parent: @
			height: 48
			width: 48
			x: 24
			y: 4
			image: options.icon
			backgroundColor: null

		navName = new TextLayer
			parent: @
			x: Align.center
			y: Align.bottom(-6)
			fontSize: nav1.fontSize
			textAlign: nav1.textAlign
			letterSpacing: nav1.letterSpacing
			lineHeight: nav1.lineHeight
			textTransform: nav1.textTransform
			padding: nav1.padding
			fontFamily: @.fontFamily
			color: @.color

			text: options.navTitle		



Categories = [
	{id: "breakfast", name: "Breakfast", icon: bagelICO, subcat1: "Egg Sandwiches", subcat2: "Baked Eggs", subcat3: "Oatmeal", subcat4: "Bagels & Spreads", subcat5: "Coffee & Tea"}
	{id: "lunchDinner", name: "Lunch & Dinner", icon: sandwichICO, subcat1: "Egg Sandwiches", subcat2: "Baked Eggs", subcat3: "Oatmeal", subcat4: "Bagels & Spreads", subcat5: "Coffee & Tea"}
	{id: "kids", name: "Kids", icon: kidsICO}
	{id: "bakery", name: "Bakery", icon: croissantICO, subcat1: "Sweets", subcat2: "Bagels", subcat3: "Pandas"}
	{id: "beverages", name: "Beverages", icon: coffeeICO, subcat1: "Hot Stuff", subcat2: "Cold Stuff", subcat3: "Fancy Stuff"}
	]
SubCats_Breakfast = ["Egg Sandwiches", "Baked Eggs", "Oatmeal", "Bagels & Spreads", "Coffee & Tea"]
SubCats_Lunch = ["Sandwiches", "Salads", "Soups", "Bowls"]
SubCats_Kids = ["Soup & Pasta", "Sandwiches", "Crayons", "Monkeys"]
SubCats_Bakery = ["Sweets", "Bagels", "Pandas"]
SubCats_Beverages = ["Coffee & Tea", "Iced Tea & Lemonade", "Smoothies", "Bottled Stuff"]



### Creating Main Navigation ###

mainNav = new Layer
	x: Align.center
	y: headline.maxY+42
	width: 642
	height: 76
	backgroundColor: white


nav = []
for navItem, i in Categories #create 5 main nav buttons
	navItem = new navButt
		parent: mainNav
		name: navItem.name+" off"
# 		id: navItem.id+"_off"
		navTitle: navItem.name
		icon: navItem.icon
		active: false
		opacity: 1
		y: 0
		x: 0
	nav.push(navItem)

# spacing out main nav buttons to match mockups
nav[1].x = nav[0].x+nav[0].width+67
nav[2].x = nav[1].x+nav[1].width+37
nav[3].x = nav[2].x+nav[2].width-1
nav[4].x = nav[3].x+nav[3].width+30

navON = [] # creating selected/active/ON states for main nav buttons
for layer, i in Categories
	layer = new navButt
		parent: mainNav
		name: layer.name+" on"
		navTitle: layer.name
		icon: layer.icon
		family: nav1ON.fontFamily
		color: nav1ON.color
		opacity: 0
		x: 0
		y: 0
	navON.push(layer)

# spacing out on state versions of main nav buttons
navON[1].x = nav[1].x
navON[2].x = nav[2].x
navON[3].x = nav[3].x
navON[4].x = nav[4].x



### Creating Sub Navigation ###

subNavBar = new Layer #background layer
	x: 0-(mainNav.x)
	y: 29+mainNav.height
	parent: mainNav
	width: Screen.width
	height: 74
	backgroundColor: ltGreyBg

catPicker = new Layer # moving triangle thing that selects the main nav buttons
	parent: subNavBar
	y: -10
	height: 20
	width: 20
	rotation: 45
	backgroundColor: subNavBar.backgroundColor


subCatLine = new Layer # green line in subcategory space
	parent: subNavBar
	y: Align.bottom
	height: 3
	backgroundColor: medGreen

subNavBar_container = new Layer # where the subnav text will live
	parent: subNavBar
	x: Align.center
	width: 0
	height: subNavBar.height
	backgroundColor: null
	style:
		display: "flex"
# 		justifyContent: "space-between"

class subCats extends Layer
	constructor: (@options={})->
		@options.fontSize = subnav.fontSize
		@options.fontFamily ?= subnav.fontFamily
		@options.textAlign = "center"
		@options.letterSpacing = subnav.letterSpacing
		@options.lineHeight = subnav.lineHeight
# 		@options.padding = subnav.padding
		@options.color ?= subnav.color
		@options.text ?= "I am a button!"
		@options.active ?= false
		if @options.active is true
			@options.fontFamily = subnavON.fontFamily
			@options.color = subnavON.color
		
		_.defaults @options,
			backgroundColor: spacer
			height: subNavBar.height
# 			width: @options.text.length * ((@options.fontSize + 3)/2)+60
			
			
		@label = new TextLayer
			text: @options.text
			fontSize: @options.fontSize
			fontFamily: @options.fontFamily
			color: @options.color
			textAlign: @options.textAlign
			name: "label"
			backgroundColor: blue
			width: @options.text.length * ((@options.fontSize + 3)/2)
			
		super @options
		
		@label.parent = @
		@label.y = Align.center
		@label.x = 30
		@.width = @label.width+60
	
	@define 'active',
		get: ->
			@options.active
		set: (value) ->
			@options.active = value
			if @options.active is true
				@label.fontFamily = subnavON.fontFamily
				@label.color = subnavON.color
			else
				@label.fontFamily = subnav.fontFamily
				@label.color = subnav.color

SubCats = [] # array where the subcategories will live. changes when a nav button is clicked.



### LOADING STATES ###

# sets first category as Breakfast
catPicker.midX = nav[0].midX+mainNav.x
nav[0].opacity = 0
navON[0].opacity = 1

# sets the first subcategories for breakfast
for subcat, i in SubCats_Breakfast
	subcat = new subCats
		parent: subNavBar_container
		text: SubCats_Breakfast[i]
		style:
			position: "relative"
	SubCats.push(subcat)
	subNavBar_container.width = subNavBar_container.width+subcat.width

# sets the first subcategory active state
subNavBar_container.x = Align.center
SubCats[0].active = true
subCatLine.width = SubCats[0].width - 60
subCatLine.midX = SubCats[0].midX + subNavBar_container.x

## ----------- ##

emptySubs = ->
	for layer, i in SubCats
		layer.destroy()
		SubCats[i] = null
	SubCats.length = null
	subNavBar_container.width = 0

fillSubs = (subsArray) ->
	for layer, i in subsArray
		layer = new subCats
			parent: subNavBar_container
			text: subsArray[i]
			style:
				position: "relative"
		SubCats.push(layer)
		subNavBar_container.width = (layer.width+40)*i
		subNavBar_container.x = Align.center

lineAnimation = 
	options:
		time: .5
		curve: Spring(damping: 0.8)

subCatSelect = (layer) ->
	layer.onClick ->
		for option in SubCats
			if option == layer
				option.active = true
			else
				option.active = false
		if layer == SubCats[0]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 60
				x: subNavBar_container.x + 30
		if layer == SubCats[1]
			subCatLine.animate
				options:
					time: 0.5
				width: layer.width - 60
				x: subNavBar_container.x + 30 + SubCats[0].width
		if layer == SubCats[2]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 60
				x: subNavBar_container.x + 30 + SubCats[0].width + SubCats[1].width
		if layer == SubCats[3]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 60
				x: subNavBar_container.x + 30 + SubCats[0].width + SubCats[1].width + SubCats[2].width
		if layer == SubCats[4]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 60
				x: subNavBar_container.x + 30 + SubCats[0].width + SubCats[1].width + SubCats[2].width + SubCats[3].width
		if layer == SubCats[5]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 60
				x: subNavBar_container.x + 30 + SubCats[0].width + SubCats[1].width + SubCats[2].width + SubCats[3].width + SubCats[4].width

for layer in SubCats
	subCatSelect(layer)

switchCategory = (layer, layerON, subsArray) -> #clicking on <layer> will change state to <layerON> and propogate subcategories to <subsArray>
	layer.onClick ->
		catPicker.animate
			midX: layer.midX + mainNav.x
			options:
				time: .3
				curve: Bezier.easeOut
		for option in nav
			if option == layer
				@.active is true
			else 
				option.active is false
		for option in navON
			if option == layerON
				option.animate
					opacity: 1
					options:
						time: 0.5
			else option.opacity = 0
		for option in nav
			if option == layer
				option.animate
					opacity: 0
					options:
						time: 0.5
			else option.opacity = 1
		emptySubs() #clear out the subcategory array
		fillSubs(subsArray) #refill the subcategory array
		subCatLoad()




switchCategory(nav[0], navON[0], SubCats_Breakfast)
switchCategory(nav[1], navON[1], SubCats_Lunch)
switchCategory(nav[2], navON[2], SubCats_Kids)
switchCategory(nav[3], navON[3], SubCats_Bakery)
switchCategory(nav[4], navON[4], SubCats_Beverages)













