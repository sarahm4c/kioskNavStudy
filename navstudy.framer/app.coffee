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

## Device Type - iPad Air, Landscape ##
Framer.Device.deviceType = "apple-ipad-air-2-silver"
Framer.Device.orientation = 90

background = new BackgroundLayer
SG = require "Styleguide"


data = JSON.parse Utils.domLoadDataSync “data/Categories.json”


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

### Icons ###

bagelICO = "images/ICO/bagelICO.png"
coffeeICO = "images/ICO/coffeeICO.png"
croissantICO = "images/ICO/croissantICO.png"
kidsICO = "images/ICO/kidsICO.png"
sandwichICO = "images/ICO/sandwichICO.png"


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

### Data ###
###Categories = [
	{id: "breakfast", name: "Breakfast", icon: bagelICO, subcat1: "Egg Sandwiches", subcat2: "Baked Eggs", subcat3: "Oatmeal", subcat4: "Bagels & Spreads", subcat5: "Coffee & Tea"}
	{id: "lunchDinner", name: "Lunch & Dinner", icon: sandwichICO, subcat1: "Egg Sandwiches", subcat2: "Baked Eggs", subcat3: "Oatmeal", subcat4: "Bagels & Spreads", subcat5: "Coffee & Tea"}
	{id: "kids", name: "Kids", icon: kidsICO}
	{id: "bakery", name: "Bakery", icon: croissantICO, subcat1: "Sweets", subcat2: "Bagels", subcat3: "Pandas"}
	{id: "beverages", name: "Beverages", icon: coffeeICO, subcat1: "Hot Stuff", subcat2: "Cold Stuff", subcat3: "Fancy Stuff"}
	]
SubCats_Breakfast = ["Egg Sandwiches", "Baked Eggs", "Oatmeal", "Bagels & Spreads", "Coffee & Tea"]
SubCats_Lunch = ["Sandwiches", "Salads", "Soups", "Bowls"]
SubCats_Kids = ["Soup & Pasta", "Sandwiches", "PANDAS", "Monkeys"]
SubCats_Bakery = ["Sweets", "Bagels", "Pandas"]
SubCats_Beverages = ["Coffee & Tea", "Iced Tea & Lemonade", "Smoothies", "Bottled Stuff"]

Sandwiches = []
theItalian ={
	name: "The Italian Sandwich",
	ingredients: "Smoked Ham, Chianti Wine Salami, Spicy Sopressa, Provolone, Spicy Giardiniera, Basil Mayo, Fresh Arugula",
	bread: "Hoagie Roll",
	price: 9.59,
	size: "Whole",
	calories: 880}
Sandwiches.push(theItalian)
BTB ={
	name: "Bacon Turkey Bravo",
	ingredients: "Signature Sauce, All-Natural Bacon, Green Leaf Lettuce, Gouda, Turkey, Salt & Pepper, Sliced Tomatoes",
	bread: "Tomato Basil Bread",
	price: 9.59,
	size: "Whole",
	calories: 630}
Sandwiches.push(BTB)
modernCaprese ={
	name: "Modern Caprese Sandwich",
	price: 10.59,
	size: "Whole",
	calories: 760}
Sandwiches.push(modernCaprese)
steakAndArugula ={
	name: "Steak & Arugula",
	price: 10.59,
	size: "Whole",
	calories: 500,}
Sandwiches.push(steakAndArugula)
turkeyAppleCheddar ={
	name: "Roasted Turkey, Apple & Cheddar Sandwich",
	price: 10.59,
	size: "Whole",
	calories: 710}
Sandwiches.push(turkeyAppleCheddar)
turkeyBLT ={
	name: "Roasted Turkey & Avocado BLT",
	price: 10.59,
	size: "Whole",
	calories: 640}
Sandwiches.push(turkeyBLT)
napaChicken ={
	name: "Napa Almond Chicken Salad Sandwich",
	price: 9.59,
	size: "Whole",
	calories: 550}
Sandwiches.push(napaChicken)
turkeySandwich ={
	name: "Turkey Sandwich",
	price: 7.69,
	size: "Whole",
	calories: 560}
Sandwiches.push(turkeySandwich)
sierraTurkey ={
	name: "Sierra Turkey Sandwich",
	price: 9.59,
	size: "Whole",
	calories: 730}
Sandwiches.push(sierraTurkey)
hamAndSwiss = {	
	name: "Ham & Swiss Sandwich",
	price: 7.69,
	size: "Whole",
	calories:  730}
Sandwiches.push(hamAndSwiss)
medVeggie ={
	name: "Mediterranean Veggie",
	price: 7.69,
	size: "Whole",
	calories:  440}
Sandwiches.push(medVeggie)
tunaSalad ={
	name: "Tuna Salad Sandwich",
	price: 7.69,
	size: "Whole",
	calories: 670}
Sandwiches.push(tunaSalad)
###


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
for navItem, i in Categories #create 5 main nav buttons
	navItem = new SG.navButt
		parent: mainNav
		name: navItem.name
		text: navItem.name
		icon: navItem.icon
		active: false
# 		style:
# 			position: "relative"
# 			flexGrow: "1"
	nav.push(navItem)

print Categories[0]

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
for subcat, i in SubCats_Breakfast
	subcat = new SG.subCats
		parent: subNavBar_container
		text: SubCats_Breakfast[i]
		style:
			position: "relative"
	SubCats.push(subcat)
	subNavBar_container.width = subNavBar_container.width+subcat.width
	subNavBar_container.x = Align.center

# sets the first subcategory active state
nav[0].active = true
SubCats[0].active = true
subCatLine.width = SubCats[0].width-40
subCatLine.midX = SubCats[0].midX + subNavBar_container.x

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
	subCatLine.width = SubCats[0].width - 60
	subCatLine.midX = SubCats[0].midX + subNavBar_container.x

# Fxn:  Select Subcategory #

lineAnimation = 
	options:
		time: .5
		curve: Spring(damping: .8)


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
				options: lineAnimation.options
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

## Fxn: Switch Main Categories ##
pickCategory = (layer) ->
	catPicker.animate
		midX: layer.midX + mainNav.x
		options:
			time: .3
			curve: Bezier.easeOut


switchCategory = (layer) -> #clicking on <layer> will change to active state and propogate subcategories to <subsArray>
# 	print layer.name
	layer.active == true
	for option in nav
		if option is layer
			option.active = true
		else 
			option.active = false
	if layer == nav[0]
		pickCategory(nav[0])
		fillSubs(SubCats_Breakfast)
	if layer == nav[1]
		pickCategory(nav[1])
		fillSubs(SubCats_Lunch)
	if layer == nav[2]
		pickCategory(nav[2])
		fillSubs(SubCats_Kids)
	if layer == nav[3]
		pickCategory(nav[3])
		fillSubs(SubCats_Bakery)
	if layer == nav[4]
		pickCategory(nav[4])
		fillSubs(SubCats_Beverages)
		
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

makeGrid(Sandwiches, false)


