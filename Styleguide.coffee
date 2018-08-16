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


## Main Nav Buttons ##
class exports.navButt extends Layer
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