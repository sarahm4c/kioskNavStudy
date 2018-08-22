### Colors ###

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


### Type Styles ###
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
	textAlign: "left"
	letterSpacing: .2
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

class exports.Link1 extends TextLayer
	constructor: (@options={})->
		@options.text ?= "link1"
		_.defaults @options,
			fontSize: 18
			textAlign: "left"
			letterSpacing: 0
			lineHeight: 24/18
			textTransform: null
			padding:
				top: -4
				bottom: -4
			fontFamily: "Calibre-Medium"
			color: dkGreen
		super @options


### Navigation ###

## Subcategory ##
class exports.subCats extends Layer
	constructor: (@options={})->
		@options.fontSize = subnav.fontSize
		@options.fontFamily ?= subnav.fontFamily
		@options.textAlign = "center"
		@options.letterSpacing = subnav.letterSpacing
		@options.lineHeight = subnav.lineHeight
# 		@options.padding = subnav.padding
		@options.color ?= subnav.color
		@options.text ?= "Subnav button!"
		@options.active ?= false
		if @options.active is true
			@options.fontFamily = subnavON.fontFamily
			@options.color = subnavON.color
		
		_.defaults @options,
			backgroundColor: null
#			borderColor: black
#			borderWidth: 1
			height: 74
# 			width: @options.text.length * ((@options.fontSize + 3)/2)+60
			
			
		@label = new TextLayer
			text: @options.text
			fontSize: @options.fontSize
			fontFamily: @options.fontFamily
			color: @options.color
			textAlign: @options.textAlign
			name: "label"
			backgroundColor: null
#			width: @options.text.length * ((@options.fontSize + 3)/2)
			
		super @options
		
		@label.parent = @
		@label.y = Align.center
		@label.x = 20
		@.width = @label.width+40
	
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


## Main Nav Buttons ##
class exports.navButt extends Layer
	constructor: (@options={})->
		@options.fontSize = nav1.fontSize
		@options.fontFamily ?= nav1.fontFamily
		@options.color ?= nav1.color
		@options.textAlign = nav1.textAlign
		@options.letterSpacing = nav1.letterSpacing
		@options.textTransform = nav1.textTransform
		@options.lineHeight = nav1.lineHeight
		@options.text ?= "Main Nav"
		@options.active ?= false
		if @options.active is true
			@options.fontFamily = nav1ON.fontFamily
			@options.color = nav1ON.color
		
		_.defaults @options,
			backgroundColor: null
			x: 0
			width: 102
			height: 76
#			borderColor: black
#			borderWidth: 1

		@asset = new Layer
			name: "asset"
			height: 48
			width: 48
			image: @options.icon
			backgroundColor: null

		@label = new TextLayer
			name: "label"
			fontSize: @options.fontSize
			textAlign: @options.textAlign
			letterSpacing: @options.letterSpacing
			lineHeight: @options.lineHeight
			textTransform: @options.textTransform
			padding: @options.padding
			fontFamily: @options.fontFamily
			color: @options.color
			text: @options.text
			backgroundColor: null


		super @options
		# --------------------------
		
		@.width = @label.width

		@asset.parent = @label.parent = @
		
		@label.y = Align.bottom
		@label.x = @asset.x = Align.center()
		
		# ---------------------------
	@define 'active',
		get: ->
			@options.active
		set: (value) ->
			@options.active = value
			if @options.active is true
				@label.fontFamily = nav1ON.fontFamily
				@label.color = nav1ON.color
			else
				@label.fontFamily = nav1.fontFamily
				@label.color = nav1.color	



## Product Grid Cards ##

class exports.ProdCard extends Layer
	constructor: (@options={})->
		@options.width = $prodCard.width
		@options.height = $prodCard.height
		@options.backgroundColor = null
		@options.style =
			position: "relative"

		@options.spacersON ?= false
		if @options.spacersON is false
			@spacer_bg = clear
			@spacer2_bg = clear
			@gutter_props = clear
		else
			@spacer_bg = PCspacer1.backgroundColor
			@spacer2_bg = PCimageSpacer.backgroundColor
			@gutter_props = PCgutterL.backgroundColor
		@options.exception ?= true
		if @options.exception is true
			@options.visible is true

		@options.productName ?= "productName"
		@options.subtitle ?= "subtitle"
		@options.price ?= "price"
		@options.Size ?= "Size"
		@options.cal ?= "cal"
		@options.asset ?= "images/design/sandwich.png"


# -- Gutters --------------------------------------------

		@gutterL = new Layer
			frame: PCgutterL.frame
			backgroundColor: @gutter_props
		@gutterR = new Layer
			frame: PCgutterR.frame
			backgroundColor: @gutter_props

# -- Containers --------------------------------------------
		@imageContainer = new Layer
			frame: PCimageContainer.frame
			backgroundColor: @spacer2_bg

		
		@textContainer = new Layer
			x: PCtext.x
			y: PCtext.y
			width: PCtext.width
			backgroundColor: null
			style:
				display: "flex"
				flexDirection: "column-reverse"
				justifyContent: "flex-end"
				

# -- Image --------------------------------------------

		@mask = new Layer
			frame: PCimageMask.frame
			backgroundColor: null
			shadows: PCimageMask.shadows
			borderRadius: PCimageMask.borderRadius
			clip: true
			
		@picture = new Layer
			frame: PCimage.frame
			image: @options.asset
			backgroundColor: null

# -- Text --------------------------------------------

		@spacer1 = new Layer
			size: PCspacer1.size
			backgroundColor: @spacer_bg
			style:
				position: "relative"

		@title = new TextLayer
			x: PCtitle.x
			width: PCtitle.width
			fontSize: PCtitle.fontSize
			fontFamily: PCtitle.fontFamily
			lineHeight: PCtitle.lineHeight
			letterSpacing: PCtitle.letterSpacing
			textAlign: PCtitle.textAlign
			color: PCtitle.color
			text: @options.productName
			style:
				position: "relative"
			backgroundColor: null

		@spacer2 = new Layer
			size: PCspacer2.size
			backgroundColor: @spacer_bg
			style:
				position: "relative"

		@subtitle = new TextLayer
			width: PCsubtitle.width
			fontSize: PCsubtitle.fontSize
			fontFamily: PCsubtitle.fontFamily
			textAlign: PCsubtitle.textAlign
			lineHeight: PCsubtitle.lineHeight
			letterSpacing: PCsubtitle.letterSpacing
			color: PCsubtitle.color
			text: @options.subtitle
			visible: @options.exception
			style:
				position: "relative"

		@spacer3 = new Layer
			size: PCspacer3.size
			backgroundColor: @spacer_bg
			style:
				position: "relative"

		@price = new TextLayer
			width: PCprice.width
			fontSize: PCprice.fontSize
			fontFamily: PCprice.fontFamily
			textAlign: PCprice.textAlign
			lineHeight: PCprice.lineHeight
			letterSpacing: PCprice.letterSpacing
			text: PCprice.text
			style:
				position: "relative"
			template:
				price: @options.price
				Size: @options.Size
				cal: @options.cal

		super @options

# -- END SUPER  --------------------------------------------

# -- Image Setup --------------------------------------------
		@picture.parent = @mask
		@mask.parent = @imageContainer

# -- Text Setup --------------------------------------------
		@spacer1.parent = @title.parent = @spacer2.parent = @subtitle.parent = @spacer3.parent = @price.parent = @textContainer

# -- MAIN PARENT --------------------------------------------
		@gutterL.parent = @gutterR.parent = @textContainer.parent = @imageContainer.parent = @

# -- Getters --------------------------------------------

# turn on spacers
	@define 'spacersON',
		get: ->
			@options.spacersON
		set: -> (value) ->
			@options.spacersON = value
			if @options.spacersON is true
				@spacer_bg == PCspacer1.backgroundColor
				@spacer2_bg == PCimageSpacer.backgroundColor
				@gutter_props == PCgutterL.backgroundColor
			else
				@spacer_bg == clear
				@spacer2_bg == clear
				@gutter_props == clear

# set a date/daypart exception (ie "served until 11am")
	@define 'exception',
		get: ->
			@options.exception
		set: (value) ->
			@options.exception = value
			if @options.exception is true
				@subtitle.visible = true
			else
				@subtitle.visible = false

# -------- END OF CLASS ----------------



