
### Creating Main Navigation ###

mainNav = new Layer
	x: Align.center
	y: 120
	width: 642
	height: 76
	backgroundColor: white

## Sub Navigation Containers ##
subNavBar = new Layer #background layer
	x: 0-(mainNav.x)
	y: 29+mainNav.height
	parent: mainNav
	width: Screen.width
	height: 74
	backgroundColor: ltGreyBg

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



## Loading ##
for subcat, i in SubCats_Breakfast
	subcat = new subCats
		parent: subNavBar_container
		text: SubCats_Breakfast[i]
		style:
			position: "relative"
	SubCats.push(subcat)
	subNavBar_container.width = subNavBar_container.width+subcat.width

# # sets the first subcategory active state
subNavBar_container.x = Align.center
SubCats[0].active = true
subCatLine.width = SubCats[0].width - 60
subCatLine.midX = SubCats[0].midX + subNavBar_container.x

emptySubs = ->
	for layer, i in SubCats
		layer.destroy()
		SubCats[i] = null
	SubCats.length = null
	subNavBar_container.width = 1

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








