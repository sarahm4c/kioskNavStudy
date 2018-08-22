require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Categories":[function(require,module,exports){
var Categories;

Categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "bagelICO",
    subcats: ["Egg Sandwiches", "Baked Eggs", "Oatmeal", "Bagels & Spreads", "Coffee & Tea"]
  }, {
    id: "lunchDinner",
    name: "Lunch & Dinner",
    icon: "sandwichICO",
    subcats: ["Sandwiches", "Salads", "Soups", "Bowls"]
  }, {
    id: "kids",
    name: "Kids",
    icon: "kidsICO",
    subcats: ["Soup & Pasta", "Sandwiches", "PANDAS", "Monkeys"]
  }, {
    id: "bakery",
    name: "Bakery",
    icon: "croissantICO",
    subcats: ["Sweets", "Bagels", "Pandas"]
  }, {
    id: "beverages",
    name: "Beverages",
    icon: "coffeeICO",
    subcats: ["Coffee & Tea", "Iced Tea & Lemonade", "Smoothies", "Bottled Stuff"]
  }
];


},{}],"Styleguide":[function(require,module,exports){

/* Colors */
var H1, black, blue, clear, disabledTxt, dkGreen, dkGreyTxt, ltGreyBg, ltGreyTxt, medGreen, nav1, nav1ON, spacer, subnav, subnavON, white,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

white = new Color("#FFF");

black = new Color("#000");

blue = new Color("#02CCD0");

spacer = new Color("rgba(2,204,208,.3)");

medGreen = new Color("#6B9F62");

dkGreen = new Color("#4C753F");

dkGreyTxt = new Color("#35383D");

ltGreyTxt = new Color("#6F6F75");

disabledTxt = new Color("#949499");

ltGreyBg = new Color("#F1F1F1");

clear = "rgba(255,255,255,0)";


/* Type Styles */

H1 = {
  font: "600 40px/1.1 Archer-Semibold",
  textAlign: "center",
  color: dkGreyTxt,
  letterSpacing: -0.89,
  padding: {
    top: -4,
    bottom: -4
  }
};

nav1 = {
  fontSize: 20,
  textAlign: "left",
  letterSpacing: .2,
  lineHeight: 1.2,
  textTransform: "uppercase",
  padding: {
    top: -4,
    bottom: -4
  },
  fontFamily: "Calibre-Regular",
  color: ltGreyTxt
};

nav1ON = {
  fontFamily: "Calibre-Medium",
  color: dkGreyTxt
};

subnav = {
  fontSize: 20,
  textAlign: "justify",
  letterSpacing: 0,
  lineHeight: 1,
  padding: {
    top: -4,
    bottom: -4,
    right: 30,
    left: 30
  },
  fontFamily: "Calibre-Regular",
  color: ltGreyTxt
};

subnavON = {
  fontFamily: "Calibre-Medium",
  color: dkGreyTxt
};

exports.Link1 = (function(superClass) {
  extend(Link1, superClass);

  function Link1(options) {
    var base;
    this.options = options != null ? options : {};
    if ((base = this.options).text == null) {
      base.text = "link1";
    }
    _.defaults(this.options, {
      fontSize: 18,
      textAlign: "left",
      letterSpacing: 0,
      lineHeight: 24 / 18,
      textTransform: null,
      padding: {
        top: -4,
        bottom: -4
      },
      fontFamily: "Calibre-Medium",
      color: dkGreen
    });
    Link1.__super__.constructor.call(this, this.options);
  }

  return Link1;

})(TextLayer);


/* Navigation */

exports.subCats = (function(superClass) {
  extend(subCats, superClass);

  function subCats(options) {
    var base, base1, base2, base3;
    this.options = options != null ? options : {};
    this.options.fontSize = subnav.fontSize;
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = subnav.fontFamily;
    }
    this.options.textAlign = "center";
    this.options.letterSpacing = subnav.letterSpacing;
    this.options.lineHeight = subnav.lineHeight;
    if ((base1 = this.options).color == null) {
      base1.color = subnav.color;
    }
    if ((base2 = this.options).text == null) {
      base2.text = "Subnav button!";
    }
    if ((base3 = this.options).active == null) {
      base3.active = false;
    }
    if (this.options.active === true) {
      this.options.fontFamily = subnavON.fontFamily;
      this.options.color = subnavON.color;
    }
    _.defaults(this.options, {
      backgroundColor: null,
      height: 74
    });
    this.label = new TextLayer({
      text: this.options.text,
      fontSize: this.options.fontSize,
      fontFamily: this.options.fontFamily,
      color: this.options.color,
      textAlign: this.options.textAlign,
      name: "label",
      backgroundColor: null
    });
    subCats.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    this.label.y = Align.center;
    this.label.x = 20;
    this.width = this.label.width + 40;
  }

  subCats.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      this.options.active = value;
      if (this.options.active === true) {
        this.label.fontFamily = subnavON.fontFamily;
        return this.label.color = subnavON.color;
      } else {
        this.label.fontFamily = subnav.fontFamily;
        return this.label.color = subnav.color;
      }
    }
  });

  return subCats;

})(Layer);

exports.navButt = (function(superClass) {
  extend(navButt, superClass);

  function navButt(options) {
    var base, base1, base2, base3;
    this.options = options != null ? options : {};
    this.options.fontSize = nav1.fontSize;
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = nav1.fontFamily;
    }
    if ((base1 = this.options).color == null) {
      base1.color = nav1.color;
    }
    this.options.textAlign = nav1.textAlign;
    this.options.letterSpacing = nav1.letterSpacing;
    this.options.textTransform = nav1.textTransform;
    this.options.lineHeight = nav1.lineHeight;
    if ((base2 = this.options).text == null) {
      base2.text = "Main Nav";
    }
    if ((base3 = this.options).active == null) {
      base3.active = false;
    }
    if (this.options.active === true) {
      this.options.fontFamily = nav1ON.fontFamily;
      this.options.color = nav1ON.color;
    }
    _.defaults(this.options, {
      backgroundColor: null,
      x: 0,
      width: 102,
      height: 76
    });
    this.asset = new Layer({
      name: "asset",
      height: 48,
      width: 48,
      image: this.options.icon,
      backgroundColor: null
    });
    this.label = new TextLayer({
      name: "label",
      fontSize: this.options.fontSize,
      textAlign: this.options.textAlign,
      letterSpacing: this.options.letterSpacing,
      lineHeight: this.options.lineHeight,
      textTransform: this.options.textTransform,
      padding: this.options.padding,
      fontFamily: this.options.fontFamily,
      color: this.options.color,
      text: this.options.text,
      backgroundColor: null
    });
    navButt.__super__.constructor.call(this, this.options);
    this.width = this.label.width;
    this.asset.parent = this.label.parent = this;
    this.label.y = Align.bottom;
    this.label.x = this.asset.x = Align.center();
  }

  navButt.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      this.options.active = value;
      if (this.options.active === true) {
        this.label.fontFamily = nav1ON.fontFamily;
        return this.label.color = nav1ON.color;
      } else {
        this.label.fontFamily = nav1.fontFamily;
        return this.label.color = nav1.color;
      }
    }
  });

  return navButt;

})(Layer);

exports.ProdCard = (function(superClass) {
  extend(ProdCard, superClass);

  function ProdCard(options) {
    var base, base1, base2, base3, base4, base5, base6, base7;
    this.options = options != null ? options : {};
    this.options.width = $prodCard.width;
    this.options.height = $prodCard.height;
    this.options.backgroundColor = null;
    this.options.style = {
      position: "relative"
    };
    if ((base = this.options).spacersON == null) {
      base.spacersON = false;
    }
    if (this.options.spacersON === false) {
      this.spacer_bg = clear;
      this.spacer2_bg = clear;
      this.gutter_props = clear;
    } else {
      this.spacer_bg = PCspacer1.backgroundColor;
      this.spacer2_bg = PCimageSpacer.backgroundColor;
      this.gutter_props = PCgutterL.backgroundColor;
    }
    if ((base1 = this.options).exception == null) {
      base1.exception = true;
    }
    if (this.options.exception === true) {
      this.options.visible === true;
    }
    if ((base2 = this.options).productName == null) {
      base2.productName = "productName";
    }
    if ((base3 = this.options).subtitle == null) {
      base3.subtitle = "subtitle";
    }
    if ((base4 = this.options).price == null) {
      base4.price = "price";
    }
    if ((base5 = this.options).Size == null) {
      base5.Size = "Size";
    }
    if ((base6 = this.options).cal == null) {
      base6.cal = "cal";
    }
    if ((base7 = this.options).asset == null) {
      base7.asset = "images/design/sandwich.png";
    }
    this.gutterL = new Layer({
      frame: PCgutterL.frame,
      backgroundColor: this.gutter_props
    });
    this.gutterR = new Layer({
      frame: PCgutterR.frame,
      backgroundColor: this.gutter_props
    });
    this.imageContainer = new Layer({
      frame: PCimageContainer.frame,
      backgroundColor: this.spacer2_bg
    });
    this.textContainer = new Layer({
      x: PCtext.x,
      y: PCtext.y,
      width: PCtext.width,
      backgroundColor: null,
      style: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "flex-end"
      }
    });
    this.mask = new Layer({
      frame: PCimageMask.frame,
      backgroundColor: null,
      shadows: PCimageMask.shadows,
      borderRadius: PCimageMask.borderRadius,
      clip: true
    });
    this.picture = new Layer({
      frame: PCimage.frame,
      image: this.options.asset,
      backgroundColor: null
    });
    this.spacer1 = new Layer({
      size: PCspacer1.size,
      backgroundColor: this.spacer_bg,
      style: {
        position: "relative"
      }
    });
    this.title = new TextLayer({
      x: PCtitle.x,
      width: PCtitle.width,
      fontSize: PCtitle.fontSize,
      fontFamily: PCtitle.fontFamily,
      lineHeight: PCtitle.lineHeight,
      letterSpacing: PCtitle.letterSpacing,
      textAlign: PCtitle.textAlign,
      color: PCtitle.color,
      text: this.options.productName,
      style: {
        position: "relative"
      },
      backgroundColor: null
    });
    this.spacer2 = new Layer({
      size: PCspacer2.size,
      backgroundColor: this.spacer_bg,
      style: {
        position: "relative"
      }
    });
    this.subtitle = new TextLayer({
      width: PCsubtitle.width,
      fontSize: PCsubtitle.fontSize,
      fontFamily: PCsubtitle.fontFamily,
      textAlign: PCsubtitle.textAlign,
      lineHeight: PCsubtitle.lineHeight,
      letterSpacing: PCsubtitle.letterSpacing,
      color: PCsubtitle.color,
      text: this.options.subtitle,
      visible: this.options.exception,
      style: {
        position: "relative"
      }
    });
    this.spacer3 = new Layer({
      size: PCspacer3.size,
      backgroundColor: this.spacer_bg,
      style: {
        position: "relative"
      }
    });
    this.price = new TextLayer({
      width: PCprice.width,
      fontSize: PCprice.fontSize,
      fontFamily: PCprice.fontFamily,
      textAlign: PCprice.textAlign,
      lineHeight: PCprice.lineHeight,
      letterSpacing: PCprice.letterSpacing,
      text: PCprice.text,
      style: {
        position: "relative"
      },
      template: {
        price: this.options.price,
        Size: this.options.Size,
        cal: this.options.cal
      }
    });
    ProdCard.__super__.constructor.call(this, this.options);
    this.picture.parent = this.mask;
    this.mask.parent = this.imageContainer;
    this.spacer1.parent = this.title.parent = this.spacer2.parent = this.subtitle.parent = this.spacer3.parent = this.price.parent = this.textContainer;
    this.gutterL.parent = this.gutterR.parent = this.textContainer.parent = this.imageContainer.parent = this;
  }

  ProdCard.define('spacersON', {
    get: function() {
      return this.options.spacersON;
    },
    set: function() {
      return function(value) {
        this.options.spacersON = value;
        if (this.options.spacersON === true) {
          this.spacer_bg === PCspacer1.backgroundColor;
          this.spacer2_bg === PCimageSpacer.backgroundColor;
          return this.gutter_props === PCgutterL.backgroundColor;
        } else {
          this.spacer_bg === clear;
          this.spacer2_bg === clear;
          return this.gutter_props === clear;
        }
      };
    }
  });

  ProdCard.define('exception', {
    get: function() {
      return this.options.exception;
    },
    set: function(value) {
      this.options.exception = value;
      if (this.options.exception === true) {
        return this.subtitle.visible = true;
      } else {
        return this.subtitle.visible = false;
      }
    }
  });

  return ProdCard;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NtY2Rlcm1vdHQyL0RvY3VtZW50cy9HaXRIdWIva2lvc2tOYXZTdHVkeS9uYXZzdHVkeS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zbWNkZXJtb3R0Mi9Eb2N1bWVudHMvR2l0SHViL2tpb3NrTmF2U3R1ZHkvbmF2c3R1ZHkuZnJhbWVyL21vZHVsZXMvU3R5bGVndWlkZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zbWNkZXJtb3R0Mi9Eb2N1bWVudHMvR2l0SHViL2tpb3NrTmF2U3R1ZHkvbmF2c3R1ZHkuZnJhbWVyL21vZHVsZXMvQ2F0ZWdvcmllcy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIyMgQ29sb3JzICMjI1xuXG53aGl0ZSA9IG5ldyBDb2xvciAoXCIjRkZGXCIpXG5ibGFjayA9IG5ldyBDb2xvciAoXCIjMDAwXCIpXG5ibHVlID0gbmV3IENvbG9yIChcIiMwMkNDRDBcIilcbnNwYWNlciA9IG5ldyBDb2xvcihcInJnYmEoMiwyMDQsMjA4LC4zKVwiKVxubWVkR3JlZW4gPSBuZXcgQ29sb3IgKFwiIzZCOUY2MlwiKVxuZGtHcmVlbiA9IG5ldyBDb2xvciAoXCIjNEM3NTNGXCIpXG5ka0dyZXlUeHQgPSBuZXcgQ29sb3IgKFwiIzM1MzgzRFwiKVxubHRHcmV5VHh0ID0gbmV3IENvbG9yIChcIiM2RjZGNzVcIilcbmRpc2FibGVkVHh0ID0gbmV3IENvbG9yIChcIiM5NDk0OTlcIilcbmx0R3JleUJnID0gbmV3IENvbG9yIChcIiNGMUYxRjFcIilcbmNsZWFyID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCJcblxuXG4jIyMgVHlwZSBTdHlsZXMgIyMjXG4jICBcImZvbnRTdHlsZSBmb250V2VpZ2h0IGZvbnRTaXplL2xpbmVIZWlnaHQgZm9udEZhbWlseVwiICAjXG5IMSA9XG5cdGZvbnQ6IFwiNjAwIDQwcHgvMS4xIEFyY2hlci1TZW1pYm9sZFwiXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogZGtHcmV5VHh0XG5cdGxldHRlclNwYWNpbmc6IC0wLjg5XG5cdHBhZGRpbmc6XG5cdFx0dG9wOiAtNFxuXHRcdGJvdHRvbTogLTRcblxubmF2MSA9IFxuXHRmb250U2l6ZTogMjBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRsZXR0ZXJTcGFjaW5nOiAuMlxuXHRsaW5lSGVpZ2h0OiAxLjJcblx0dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxuXHRwYWRkaW5nOlxuXHRcdHRvcDogLTRcblx0XHRib3R0b206IC00XG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1SZWd1bGFyXCJcblx0Y29sb3I6IGx0R3JleVR4dFxuXG5uYXYxT04gPVxuXHRmb250RmFtaWx5OiBcIkNhbGlicmUtTWVkaXVtXCJcblx0Y29sb3I6IGRrR3JleVR4dFxuXG5cbnN1Ym5hdiA9IFxuXHRmb250U2l6ZTogMjBcblx0dGV4dEFsaWduOiBcImp1c3RpZnlcIlxuXHRsZXR0ZXJTcGFjaW5nOiAwXG5cdGxpbmVIZWlnaHQ6IDFcblx0cGFkZGluZzpcblx0XHR0b3A6IC00XG5cdFx0Ym90dG9tOiAtNFxuXHRcdHJpZ2h0OiAzMFxuXHRcdGxlZnQ6IDMwXG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1SZWd1bGFyXCJcblx0Y29sb3I6IGx0R3JleVR4dFxuXG5zdWJuYXZPTiA9XG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1NZWRpdW1cIlxuXHRjb2xvcjogZGtHcmV5VHh0XG5cbmNsYXNzIGV4cG9ydHMuTGluazEgZXh0ZW5kcyBUZXh0TGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSktPlxuXHRcdEBvcHRpb25zLnRleHQgPz0gXCJsaW5rMVwiXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGZvbnRTaXplOiAxOFxuXHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRcdFx0bGV0dGVyU3BhY2luZzogMFxuXHRcdFx0bGluZUhlaWdodDogMjQvMThcblx0XHRcdHRleHRUcmFuc2Zvcm06IG51bGxcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdHRvcDogLTRcblx0XHRcdFx0Ym90dG9tOiAtNFxuXHRcdFx0Zm9udEZhbWlseTogXCJDYWxpYnJlLU1lZGl1bVwiXG5cdFx0XHRjb2xvcjogZGtHcmVlblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblxuIyMjIE5hdmlnYXRpb24gIyMjXG5cbiMjIFN1YmNhdGVnb3J5ICMjXG5jbGFzcyBleHBvcnRzLnN1YkNhdHMgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KS0+XG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPSBzdWJuYXYuZm9udFNpemVcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IHN1Ym5hdi5mb250RmFtaWx5XG5cdFx0QG9wdGlvbnMudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPSBzdWJuYXYubGV0dGVyU3BhY2luZ1xuXHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPSBzdWJuYXYubGluZUhlaWdodFxuIyBcdFx0QG9wdGlvbnMucGFkZGluZyA9IHN1Ym5hdi5wYWRkaW5nXG5cdFx0QG9wdGlvbnMuY29sb3IgPz0gc3VibmF2LmNvbG9yXG5cdFx0QG9wdGlvbnMudGV4dCA/PSBcIlN1Ym5hdiBidXR0b24hXCJcblx0XHRAb3B0aW9ucy5hY3RpdmUgPz0gZmFsc2Vcblx0XHRpZiBAb3B0aW9ucy5hY3RpdmUgaXMgdHJ1ZVxuXHRcdFx0QG9wdGlvbnMuZm9udEZhbWlseSA9IHN1Ym5hdk9OLmZvbnRGYW1pbHlcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gc3VibmF2T04uY29sb3Jcblx0XHRcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG4jXHRcdFx0Ym9yZGVyQ29sb3I6IGJsYWNrXG4jXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdGhlaWdodDogNzRcbiMgXHRcdFx0d2lkdGg6IEBvcHRpb25zLnRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDMpLzIpKzYwXG5cdFx0XHRcblx0XHRcdFxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHRleHQ6IEBvcHRpb25zLnRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLmNvbG9yXG5cdFx0XHR0ZXh0QWxpZ246IEBvcHRpb25zLnRleHRBbGlnblxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcbiNcdFx0XHR3aWR0aDogQG9wdGlvbnMudGV4dC5sZW5ndGggKiAoKEBvcHRpb25zLmZvbnRTaXplICsgMykvMilcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblx0XHRAbGFiZWwueSA9IEFsaWduLmNlbnRlclxuXHRcdEBsYWJlbC54ID0gMjBcblx0XHRALndpZHRoID0gQGxhYmVsLndpZHRoKzQwXG5cdFxuXHRAZGVmaW5lICdhY3RpdmUnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmFjdGl2ZSBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5mb250RmFtaWx5ID0gc3VibmF2T04uZm9udEZhbWlseVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBzdWJuYXZPTi5jb2xvclxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAbGFiZWwuZm9udEZhbWlseSA9IHN1Ym5hdi5mb250RmFtaWx5XG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IHN1Ym5hdi5jb2xvclxuXG5cbiMjIE1haW4gTmF2IEJ1dHRvbnMgIyNcbmNsYXNzIGV4cG9ydHMubmF2QnV0dCBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pLT5cblx0XHRAb3B0aW9ucy5mb250U2l6ZSA9IG5hdjEuZm9udFNpemVcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IG5hdjEuZm9udEZhbWlseVxuXHRcdEBvcHRpb25zLmNvbG9yID89IG5hdjEuY29sb3Jcblx0XHRAb3B0aW9ucy50ZXh0QWxpZ24gPSBuYXYxLnRleHRBbGlnblxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPSBuYXYxLmxldHRlclNwYWNpbmdcblx0XHRAb3B0aW9ucy50ZXh0VHJhbnNmb3JtID0gbmF2MS50ZXh0VHJhbnNmb3JtXG5cdFx0QG9wdGlvbnMubGluZUhlaWdodCA9IG5hdjEubGluZUhlaWdodFxuXHRcdEBvcHRpb25zLnRleHQgPz0gXCJNYWluIE5hdlwiXG5cdFx0QG9wdGlvbnMuYWN0aXZlID89IGZhbHNlXG5cdFx0aWYgQG9wdGlvbnMuYWN0aXZlIGlzIHRydWVcblx0XHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPSBuYXYxT04uZm9udEZhbWlseVxuXHRcdFx0QG9wdGlvbnMuY29sb3IgPSBuYXYxT04uY29sb3Jcblx0XHRcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiAwXG5cdFx0XHR3aWR0aDogMTAyXG5cdFx0XHRoZWlnaHQ6IDc2XG4jXHRcdFx0Ym9yZGVyQ29sb3I6IGJsYWNrXG4jXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblxuXHRcdEBhc3NldCA9IG5ldyBMYXllclxuXHRcdFx0bmFtZTogXCJhc3NldFwiXG5cdFx0XHRoZWlnaHQ6IDQ4XG5cdFx0XHR3aWR0aDogNDhcblx0XHRcdGltYWdlOiBAb3B0aW9ucy5pY29uXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmZvbnRTaXplXG5cdFx0XHR0ZXh0QWxpZ246IEBvcHRpb25zLnRleHRBbGlnblxuXHRcdFx0bGV0dGVyU3BhY2luZzogQG9wdGlvbnMubGV0dGVyU3BhY2luZ1xuXHRcdFx0bGluZUhlaWdodDogQG9wdGlvbnMubGluZUhlaWdodFxuXHRcdFx0dGV4dFRyYW5zZm9ybTogQG9wdGlvbnMudGV4dFRyYW5zZm9ybVxuXHRcdFx0cGFkZGluZzogQG9wdGlvbnMucGFkZGluZ1xuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLmNvbG9yXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy50ZXh0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHQjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QC53aWR0aCA9IEBsYWJlbC53aWR0aFxuXG5cdFx0QGFzc2V0LnBhcmVudCA9IEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0XG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5ib3R0b21cblx0XHRAbGFiZWwueCA9IEBhc3NldC54ID0gQWxpZ24uY2VudGVyKClcblx0XHRcblx0XHQjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRAZGVmaW5lICdhY3RpdmUnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmFjdGl2ZSBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5mb250RmFtaWx5ID0gbmF2MU9OLmZvbnRGYW1pbHlcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gbmF2MU9OLmNvbG9yXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBsYWJlbC5mb250RmFtaWx5ID0gbmF2MS5mb250RmFtaWx5XG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IG5hdjEuY29sb3JcdFxuXG5cblxuIyMgUHJvZHVjdCBHcmlkIENhcmRzICMjXG5cbmNsYXNzIGV4cG9ydHMuUHJvZENhcmQgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KS0+XG5cdFx0QG9wdGlvbnMud2lkdGggPSAkcHJvZENhcmQud2lkdGhcblx0XHRAb3B0aW9ucy5oZWlnaHQgPSAkcHJvZENhcmQuaGVpZ2h0XG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gbnVsbFxuXHRcdEBvcHRpb25zLnN0eWxlID1cblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEBvcHRpb25zLnNwYWNlcnNPTiA/PSBmYWxzZVxuXHRcdGlmIEBvcHRpb25zLnNwYWNlcnNPTiBpcyBmYWxzZVxuXHRcdFx0QHNwYWNlcl9iZyA9IGNsZWFyXG5cdFx0XHRAc3BhY2VyMl9iZyA9IGNsZWFyXG5cdFx0XHRAZ3V0dGVyX3Byb3BzID0gY2xlYXJcblx0XHRlbHNlXG5cdFx0XHRAc3BhY2VyX2JnID0gUENzcGFjZXIxLmJhY2tncm91bmRDb2xvclxuXHRcdFx0QHNwYWNlcjJfYmcgPSBQQ2ltYWdlU3BhY2VyLmJhY2tncm91bmRDb2xvclxuXHRcdFx0QGd1dHRlcl9wcm9wcyA9IFBDZ3V0dGVyTC5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRAb3B0aW9ucy5leGNlcHRpb24gPz0gdHJ1ZVxuXHRcdGlmIEBvcHRpb25zLmV4Y2VwdGlvbiBpcyB0cnVlXG5cdFx0XHRAb3B0aW9ucy52aXNpYmxlIGlzIHRydWVcblxuXHRcdEBvcHRpb25zLnByb2R1Y3ROYW1lID89IFwicHJvZHVjdE5hbWVcIlxuXHRcdEBvcHRpb25zLnN1YnRpdGxlID89IFwic3VidGl0bGVcIlxuXHRcdEBvcHRpb25zLnByaWNlID89IFwicHJpY2VcIlxuXHRcdEBvcHRpb25zLlNpemUgPz0gXCJTaXplXCJcblx0XHRAb3B0aW9ucy5jYWwgPz0gXCJjYWxcIlxuXHRcdEBvcHRpb25zLmFzc2V0ID89IFwiaW1hZ2VzL2Rlc2lnbi9zYW5kd2ljaC5wbmdcIlxuXG5cbiMgLS0gR3V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGd1dHRlckwgPSBuZXcgTGF5ZXJcblx0XHRcdGZyYW1lOiBQQ2d1dHRlckwuZnJhbWVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQGd1dHRlcl9wcm9wc1xuXHRcdEBndXR0ZXJSID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENndXR0ZXJSLmZyYW1lXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBndXR0ZXJfcHJvcHNcblxuIyAtLSBDb250YWluZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QGltYWdlQ29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENpbWFnZUNvbnRhaW5lci5mcmFtZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc3BhY2VyMl9iZ1xuXG5cdFx0XG5cdFx0QHRleHRDb250YWluZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHg6IFBDdGV4dC54XG5cdFx0XHR5OiBQQ3RleHQueVxuXHRcdFx0d2lkdGg6IFBDdGV4dC53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCJcblx0XHRcdFx0XG5cbiMgLS0gSW1hZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBtYXNrID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENpbWFnZU1hc2suZnJhbWVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0c2hhZG93czogUENpbWFnZU1hc2suc2hhZG93c1xuXHRcdFx0Ym9yZGVyUmFkaXVzOiBQQ2ltYWdlTWFzay5ib3JkZXJSYWRpdXNcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdFxuXHRcdEBwaWN0dXJlID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENpbWFnZS5mcmFtZVxuXHRcdFx0aW1hZ2U6IEBvcHRpb25zLmFzc2V0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuIyAtLSBUZXh0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAc3BhY2VyMSA9IG5ldyBMYXllclxuXHRcdFx0c2l6ZTogUENzcGFjZXIxLnNpemVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNwYWNlcl9iZ1xuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEB0aXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6IFBDdGl0bGUueFxuXHRcdFx0d2lkdGg6IFBDdGl0bGUud2lkdGhcblx0XHRcdGZvbnRTaXplOiBQQ3RpdGxlLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBQQ3RpdGxlLmZvbnRGYW1pbHlcblx0XHRcdGxpbmVIZWlnaHQ6IFBDdGl0bGUubGluZUhlaWdodFxuXHRcdFx0bGV0dGVyU3BhY2luZzogUEN0aXRsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0XHR0ZXh0QWxpZ246IFBDdGl0bGUudGV4dEFsaWduXG5cdFx0XHRjb2xvcjogUEN0aXRsZS5jb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMucHJvZHVjdE5hbWVcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRcdEBzcGFjZXIyID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiBQQ3NwYWNlcjIuc2l6ZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc3BhY2VyX2JnXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXG5cdFx0QHN1YnRpdGxlID0gbmV3IFRleHRMYXllclxuXHRcdFx0d2lkdGg6IFBDc3VidGl0bGUud2lkdGhcblx0XHRcdGZvbnRTaXplOiBQQ3N1YnRpdGxlLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBQQ3N1YnRpdGxlLmZvbnRGYW1pbHlcblx0XHRcdHRleHRBbGlnbjogUENzdWJ0aXRsZS50ZXh0QWxpZ25cblx0XHRcdGxpbmVIZWlnaHQ6IFBDc3VidGl0bGUubGluZUhlaWdodFxuXHRcdFx0bGV0dGVyU3BhY2luZzogUENzdWJ0aXRsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0XHRjb2xvcjogUENzdWJ0aXRsZS5jb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMuc3VidGl0bGVcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmV4Y2VwdGlvblxuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEBzcGFjZXIzID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiBQQ3NwYWNlcjMuc2l6ZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc3BhY2VyX2JnXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXG5cdFx0QHByaWNlID0gbmV3IFRleHRMYXllclxuXHRcdFx0d2lkdGg6IFBDcHJpY2Uud2lkdGhcblx0XHRcdGZvbnRTaXplOiBQQ3ByaWNlLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBQQ3ByaWNlLmZvbnRGYW1pbHlcblx0XHRcdHRleHRBbGlnbjogUENwcmljZS50ZXh0QWxpZ25cblx0XHRcdGxpbmVIZWlnaHQ6IFBDcHJpY2UubGluZUhlaWdodFxuXHRcdFx0bGV0dGVyU3BhY2luZzogUENwcmljZS5sZXR0ZXJTcGFjaW5nXG5cdFx0XHR0ZXh0OiBQQ3ByaWNlLnRleHRcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHR0ZW1wbGF0ZTpcblx0XHRcdFx0cHJpY2U6IEBvcHRpb25zLnByaWNlXG5cdFx0XHRcdFNpemU6IEBvcHRpb25zLlNpemVcblx0XHRcdFx0Y2FsOiBAb3B0aW9ucy5jYWxcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cbiMgLS0gRU5EIFNVUEVSICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIC0tIEltYWdlIFNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QHBpY3R1cmUucGFyZW50ID0gQG1hc2tcblx0XHRAbWFzay5wYXJlbnQgPSBAaW1hZ2VDb250YWluZXJcblxuIyAtLSBUZXh0IFNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QHNwYWNlcjEucGFyZW50ID0gQHRpdGxlLnBhcmVudCA9IEBzcGFjZXIyLnBhcmVudCA9IEBzdWJ0aXRsZS5wYXJlbnQgPSBAc3BhY2VyMy5wYXJlbnQgPSBAcHJpY2UucGFyZW50ID0gQHRleHRDb250YWluZXJcblxuIyAtLSBNQUlOIFBBUkVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdEBndXR0ZXJMLnBhcmVudCA9IEBndXR0ZXJSLnBhcmVudCA9IEB0ZXh0Q29udGFpbmVyLnBhcmVudCA9IEBpbWFnZUNvbnRhaW5lci5wYXJlbnQgPSBAXG5cbiMgLS0gR2V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIHR1cm4gb24gc3BhY2Vyc1xuXHRAZGVmaW5lICdzcGFjZXJzT04nLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLnNwYWNlcnNPTlxuXHRcdHNldDogLT4gKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuc3BhY2Vyc09OID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLnNwYWNlcnNPTiBpcyB0cnVlXG5cdFx0XHRcdEBzcGFjZXJfYmcgPT0gUENzcGFjZXIxLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRAc3BhY2VyMl9iZyA9PSBQQ2ltYWdlU3BhY2VyLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRAZ3V0dGVyX3Byb3BzID09IFBDZ3V0dGVyTC5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHNwYWNlcl9iZyA9PSBjbGVhclxuXHRcdFx0XHRAc3BhY2VyMl9iZyA9PSBjbGVhclxuXHRcdFx0XHRAZ3V0dGVyX3Byb3BzID09IGNsZWFyXG5cbiMgc2V0IGEgZGF0ZS9kYXlwYXJ0IGV4Y2VwdGlvbiAoaWUgXCJzZXJ2ZWQgdW50aWwgMTFhbVwiKVxuXHRAZGVmaW5lICdleGNlcHRpb24nLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmV4Y2VwdGlvblxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuZXhjZXB0aW9uID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmV4Y2VwdGlvbiBpcyB0cnVlXG5cdFx0XHRcdEBzdWJ0aXRsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc3VidGl0bGUudmlzaWJsZSA9IGZhbHNlXG5cbiMgLS0tLS0tLS0gRU5EIE9GIENMQVNTIC0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbiIsIlxuXHRDYXRlZ29yaWVzID0gW1xuXHRcdHtcblx0XHRcdGlkOiBcImJyZWFrZmFzdFwiLFxuXHRcdFx0bmFtZTogXCJCcmVha2Zhc3RcIixcblx0XHRcdGljb246IFwiYmFnZWxJQ09cIixcblx0XHRcdHN1YmNhdHM6IFtcIkVnZyBTYW5kd2ljaGVzXCIsIFwiQmFrZWQgRWdnc1wiLCBcIk9hdG1lYWxcIiwgXCJCYWdlbHMgJiBTcHJlYWRzXCIsIFwiQ29mZmVlICYgVGVhXCJdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IFwibHVuY2hEaW5uZXJcIixcblx0XHRcdG5hbWU6IFwiTHVuY2ggJiBEaW5uZXJcIixcblx0XHRcdGljb246IFwic2FuZHdpY2hJQ09cIixcblx0XHRcdHN1YmNhdHM6IFtcIlNhbmR3aWNoZXNcIiwgXCJTYWxhZHNcIiwgXCJTb3Vwc1wiLCBcIkJvd2xzXCJdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogXCJraWRzXCIsXG5cdFx0XHRuYW1lOiBcIktpZHNcIixcblx0XHRcdGljb246IFwia2lkc0lDT1wiLFxuXHRcdFx0c3ViY2F0czogW1wiU291cCAmIFBhc3RhXCIsIFwiU2FuZHdpY2hlc1wiLCBcIlBBTkRBU1wiLCBcIk1vbmtleXNcIl1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiBcImJha2VyeVwiLFxuXHRcdFx0bmFtZTogXCJCYWtlcnlcIixcblx0XHRcdGljb246IFwiY3JvaXNzYW50SUNPXCIsXG5cdFx0XHRzdWJjYXRzOiBbXCJTd2VldHNcIiwgXCJCYWdlbHNcIiwgXCJQYW5kYXNcIl1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiBcImJldmVyYWdlc1wiLFxuXHRcdFx0bmFtZTogXCJCZXZlcmFnZXNcIixcblx0XHRcdGljb246IFwiY29mZmVlSUNPXCIsXG5cdFx0XHRzdWJjYXRzOiBbXCJDb2ZmZWUgJiBUZWFcIiwgXCJJY2VkIFRlYSAmIExlbW9uYWRlXCIsIFwiU21vb3RoaWVzXCIsIFwiQm90dGxlZCBTdHVmZlwiXSxcblx0XHR9LFxuXG5cdFx0XVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFHQUE7QURDQyxJQUFBOztBQUFBLFVBQUEsR0FBYTtFQUNaO0lBQ0MsRUFBQSxFQUFJLFdBREw7SUFFQyxJQUFBLEVBQU0sV0FGUDtJQUdDLElBQUEsRUFBTSxVQUhQO0lBSUMsT0FBQSxFQUFTLENBQUMsZ0JBQUQsRUFBbUIsWUFBbkIsRUFBaUMsU0FBakMsRUFBNEMsa0JBQTVDLEVBQWdFLGNBQWhFLENBSlY7R0FEWSxFQU9aO0lBQ0MsRUFBQSxFQUFJLGFBREw7SUFFQyxJQUFBLEVBQU0sZ0JBRlA7SUFHQyxJQUFBLEVBQU0sYUFIUDtJQUlDLE9BQUEsRUFBUyxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLENBSlY7R0FQWSxFQWFaO0lB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
