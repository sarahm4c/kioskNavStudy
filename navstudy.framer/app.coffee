# Install Fonts ##

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
## Device Type - iPad Air, Landscape ##
Framer.Device.deviceType = "apple-ipad-air-2-silver"
Framer.Device.orientation = 90

Screen.backgroundColor = white

# Require Outside Stuff #
SG = require "Styleguide"

data1 = JSON.parse Utils.domLoadDataSync "data/Categories.json"
data2 = JSON.parse Utils.domLoadDataSync "data/Sandwiches.json"

## Font Styles ##
#  "fontStyle fontWeight fontSize/lineHeight fontFamily"  #
H1 =
	font: "400 40px/1.1 Archer-Semibold"
	textAlign: "center"
	color: dkGreyTxt
	letterSpacing: -0.89
	padding:
		top: -4
		bottom: -4

nav1 = 
	fontSize: 20
	textAlign: "left"
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

c = data1.Categories
s = data2.Sandwiches


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

### Creating Containers ###

mainNav = new Layer
	x: Align.center
	y: headline.maxY+42
	width: 642
	height: 76
	backgroundColor: null

subNavBar = new Layer #background layer
	x: 0
	y: 29+mainNav.height+mainNav.y
	width: Screen.width
	height: 74
	backgroundColor: ltGreyBg

subNavBar_container = new Layer # where the subnav text will live
	parent: subNavBar
	x: Align.center
	width: 0
	height: subNavBar.height
	backgroundColor: null
	style:
		display: "flex"



gridStart = subNavBar.maxY + 27

gridContainer = new Layer
	y: 0
	x: Align.center()
	width: Screen.width - 32
	height: 0
	backgroundColor: null
	style:
		display: "flex"
		flexFlow: "row wrap"
		justifyContent: "center"

scroll = new ScrollComponent
	x: Align.center()
	y: gridStart
	width: Screen.width
	height: Screen.height - gridStart
# 	backgroundColor: "rgba(0,0,0,.2)"
	scrollHorizontal: false

scroll.contentInset =
	top: 27
	right: 0
	left: 0
	bottom: 0



## Populating Main Nav ##

nav = []
for option, i in c #create 5 main nav buttons
	navItem = new SG.navButt
		parent: mainNav
		name: c[i].name
		text: c[i].name
		icon: c[i].icon
		active: false
# 		style:
# 			position: "relative"
# 			flexGrow: "1"
	nav.push(navItem)

mainNavSum = 0
for layer in nav
	mainNavSum = mainNavSum + layer.width

mainNavSpace = (mainNav.width - mainNavSum) / (nav.length - 1)

oldWidth = 0
oldX = 0
for layer, i in nav
	if i == 0
		layer.x = 0
		oldWidth = layer.width
	else
		layer.x = oldX + oldWidth + mainNavSpace
		oldWidth = layer.width
		oldX = layer.x

## Navigation Picker Components ##

catPicker = new Layer # moving triangle thing that selects the main nav buttons

	y: subNavBar.y-10
	height: 20
	width: 20
	rotation: 45
	backgroundColor: subNavBar.backgroundColor
	
subCatLine = new Layer # green line in subcategory space
	parent: subNavBar
	y: Align.bottom
	height: 3
	backgroundColor: medGreen

### LOADING STATES ###

SubCats = [] # array where the subcategories will live. changes when a nav button is clicked.

# sets first category as Breakfast
catPicker.midX = nav[0].midX+mainNav.x

# sets the first subcategories for breakfast
for option, i in c
	subcat = new SG.subCats
		parent: subNavBar_container
		text: c[0].subCats[i]
		style:
			position: "relative"
	SubCats.push(subcat)
	subNavBar_container.width = subNavBar_container.width+subcat.width
	subNavBar_container.x = Align.center

# sets the first subcategory active state
nav[0].active = true
SubCats[0].active = true
subCatLine.width = SubCats[0].width - 30
subCatLine.x = SubCats[0].x + subNavBar_container.x + 15



## ----------- ##

# Fxn:  Empty Subcat Array #
emptySubs = ->
	for layer, i in SubCats
		layer.destroy()
		SubCats[i] = null
	SubCats.length = null
	subNavBar_container.width = 0

# Populate Subcat Array #
fillSubs = (subsArray) ->
	emptySubs()
	for layer, i in subsArray
		layer = new SG.subCats
			parent: subNavBar_container
			text: subsArray[i]
			style:
				position: "relative"
		SubCats.push(layer)
		subNavBar_container.width = subNavBar_container.width+layer.width
		subNavBar_container.x = Align.center
	SubCats[0].active = true
	subCatLine.width = SubCats[0].width - 30
	subCatLine.x = SubCats[0].x + subNavBar_container.x + 15
	



# Fxn:  Select Subcategory #

lineAnimation = 
	options:
		time: .5
		curve: Spring(damping: 1)


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
				width: layer.width - 30
				x: subNavBar_container.x + 15
		if layer == SubCats[1]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 30
				x: subNavBar_container.x + 15 + SubCats[0].width
		if layer == SubCats[2]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 30
				x: subNavBar_container.x + 15 + SubCats[0].width + SubCats[1].width
		if layer == SubCats[3]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 30
				x: subNavBar_container.x + 15 + SubCats[0].width + SubCats[1].width + SubCats[2].width
		if layer == SubCats[4]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 30
				x: subNavBar_container.x + 15 + SubCats[0].width + SubCats[1].width + SubCats[2].width + SubCats[3].width
		if layer == SubCats[5]
			subCatLine.animate
				options: lineAnimation.options
				width: layer.width - 30
				x: subNavBar_container.x + 15 + SubCats[0].width + SubCats[1].width + SubCats[2].width + SubCats[3].width + SubCats[4].width


for layer in SubCats
	subCatSelect(layer)
	


## Fxn: Switch Main Categories ##
pickCategory = (layer) ->
	catPicker.animate
		midX: layer.midX + mainNav.x
		options:
			time: .3
			curve: Bezier.easeOut


switchCategory = (layer) -> #clicking on <layer> will change to active state and propogate subcategories to <subsArray>
	layer.active == true
	for option in nav
		if option is layer
			option.active = true
		else 
			option.active = false
	if layer == nav[0]
		pickCategory(nav[0])
		fillSubs(c[0].subCats)
	if layer == nav[1]
		pickCategory(nav[1])
		fillSubs(c[1].subCats)
	if layer == nav[2]
		pickCategory(nav[2])
		fillSubs(c[2].subCats)
	if layer == nav[3]
		pickCategory(nav[3])
		fillSubs(c[3].subCats)
	if layer == nav[4]
		pickCategory(nav[4])
		fillSubs(c[4].subCats)
		
	for layer in SubCats
		subCatSelect(layer)

for option in nav
	option.onClick ->
		switchCategory(this)

# Fxn: Create Grid 
makeGrid = (Data, exception) ->
	Array = []
	for option, i in Data
		bob = new SG.ProdCard
			parent: gridContainer
			name: "Card_"+i
			exception: exception
			spacersON: false
			style:
				flex: "none"
			asset: "images/design/sandwich.png"
			productName: option.name
			subtitle: option.subtitle
			price: option.price
			Size: option.size
			cal: option.calories
		x = bob.height
		Array.push(bob)
	
		if i == 0
			gridContainer.height = x

		if (i/3) % 1 == 0
			gridContainer.height = (x/3)*i
		else if ((i+1)/3) % 1 == 0
			a = (i+1)
			gridContainer.height = (x/3)*a
		else if ((i+2)/3) % 1 == 0
			b = (i+2)
			gridContainer.height = (x/3)*b
	
	gridContainer.parent = scroll.content

makeGrid(s, false) # runs makeGrid with array named "s"


