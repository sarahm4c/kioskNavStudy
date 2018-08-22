require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Styleguide":[function(require,module,exports){

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NtY2Rlcm1vdHQyL0Ryb3Bib3ggKFBhbmVyYSkvUGFuZXJhIERFWC8wMSBPbW5pIFJlZGVzaWduLzA0LURlc2lnbi1TcHJpbnQtV29yay9fS2lvc2svMTgwNzI1X0tpb3NrLU5hdiBTdHVkeS9GcmFtZXIvbmF2U3R1ZHkuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvc21jZGVybW90dDIvRHJvcGJveCAoUGFuZXJhKS9QYW5lcmEgREVYLzAxIE9tbmkgUmVkZXNpZ24vMDQtRGVzaWduLVNwcmludC1Xb3JrL19LaW9zay8xODA3MjVfS2lvc2stTmF2IFN0dWR5L0ZyYW1lci9uYXZTdHVkeS5mcmFtZXIvbW9kdWxlcy9TdHlsZWd1aWRlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMjIyBDb2xvcnMgIyMjXG5cbndoaXRlID0gbmV3IENvbG9yIChcIiNGRkZcIilcbmJsYWNrID0gbmV3IENvbG9yIChcIiMwMDBcIilcbmJsdWUgPSBuZXcgQ29sb3IgKFwiIzAyQ0NEMFwiKVxuc3BhY2VyID0gbmV3IENvbG9yKFwicmdiYSgyLDIwNCwyMDgsLjMpXCIpXG5tZWRHcmVlbiA9IG5ldyBDb2xvciAoXCIjNkI5RjYyXCIpXG5ka0dyZWVuID0gbmV3IENvbG9yIChcIiM0Qzc1M0ZcIilcbmRrR3JleVR4dCA9IG5ldyBDb2xvciAoXCIjMzUzODNEXCIpXG5sdEdyZXlUeHQgPSBuZXcgQ29sb3IgKFwiIzZGNkY3NVwiKVxuZGlzYWJsZWRUeHQgPSBuZXcgQ29sb3IgKFwiIzk0OTQ5OVwiKVxubHRHcmV5QmcgPSBuZXcgQ29sb3IgKFwiI0YxRjFGMVwiKVxuY2xlYXIgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIlxuXG5cbiMjIyBUeXBlIFN0eWxlcyAjIyNcbiMgIFwiZm9udFN0eWxlIGZvbnRXZWlnaHQgZm9udFNpemUvbGluZUhlaWdodCBmb250RmFtaWx5XCIgICNcbkgxID1cblx0Zm9udDogXCI2MDAgNDBweC8xLjEgQXJjaGVyLVNlbWlib2xkXCJcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBka0dyZXlUeHRcblx0bGV0dGVyU3BhY2luZzogLTAuODlcblx0cGFkZGluZzpcblx0XHR0b3A6IC00XG5cdFx0Ym90dG9tOiAtNFxuXG5uYXYxID0gXG5cdGZvbnRTaXplOiAyMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGxldHRlclNwYWNpbmc6IC4yXG5cdGxpbmVIZWlnaHQ6IDEuMlxuXHR0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiXG5cdHBhZGRpbmc6XG5cdFx0dG9wOiAtNFxuXHRcdGJvdHRvbTogLTRcblx0Zm9udEZhbWlseTogXCJDYWxpYnJlLVJlZ3VsYXJcIlxuXHRjb2xvcjogbHRHcmV5VHh0XG5cbm5hdjFPTiA9XG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1NZWRpdW1cIlxuXHRjb2xvcjogZGtHcmV5VHh0XG5cblxuc3VibmF2ID0gXG5cdGZvbnRTaXplOiAyMFxuXHR0ZXh0QWxpZ246IFwianVzdGlmeVwiXG5cdGxldHRlclNwYWNpbmc6IDBcblx0bGluZUhlaWdodDogMVxuXHRwYWRkaW5nOlxuXHRcdHRvcDogLTRcblx0XHRib3R0b206IC00XG5cdFx0cmlnaHQ6IDMwXG5cdFx0bGVmdDogMzBcblx0Zm9udEZhbWlseTogXCJDYWxpYnJlLVJlZ3VsYXJcIlxuXHRjb2xvcjogbHRHcmV5VHh0XG5cbnN1Ym5hdk9OID1cblx0Zm9udEZhbWlseTogXCJDYWxpYnJlLU1lZGl1bVwiXG5cdGNvbG9yOiBka0dyZXlUeHRcblxuXG5cblxuIyMjIE5hdmlnYXRpb24gIyMjXG5cbiMjIFN1YmNhdGVnb3J5ICMjXG5jbGFzcyBleHBvcnRzLnN1YkNhdHMgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KS0+XG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPSBzdWJuYXYuZm9udFNpemVcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IHN1Ym5hdi5mb250RmFtaWx5XG5cdFx0QG9wdGlvbnMudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPSBzdWJuYXYubGV0dGVyU3BhY2luZ1xuXHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPSBzdWJuYXYubGluZUhlaWdodFxuIyBcdFx0QG9wdGlvbnMucGFkZGluZyA9IHN1Ym5hdi5wYWRkaW5nXG5cdFx0QG9wdGlvbnMuY29sb3IgPz0gc3VibmF2LmNvbG9yXG5cdFx0QG9wdGlvbnMudGV4dCA/PSBcIlN1Ym5hdiBidXR0b24hXCJcblx0XHRAb3B0aW9ucy5hY3RpdmUgPz0gZmFsc2Vcblx0XHRpZiBAb3B0aW9ucy5hY3RpdmUgaXMgdHJ1ZVxuXHRcdFx0QG9wdGlvbnMuZm9udEZhbWlseSA9IHN1Ym5hdk9OLmZvbnRGYW1pbHlcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gc3VibmF2T04uY29sb3Jcblx0XHRcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG4jXHRcdFx0Ym9yZGVyQ29sb3I6IGJsYWNrXG4jXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdGhlaWdodDogNzRcbiMgXHRcdFx0d2lkdGg6IEBvcHRpb25zLnRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDMpLzIpKzYwXG5cdFx0XHRcblx0XHRcdFxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHRleHQ6IEBvcHRpb25zLnRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLmNvbG9yXG5cdFx0XHR0ZXh0QWxpZ246IEBvcHRpb25zLnRleHRBbGlnblxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcbiNcdFx0XHR3aWR0aDogQG9wdGlvbnMudGV4dC5sZW5ndGggKiAoKEBvcHRpb25zLmZvbnRTaXplICsgMykvMilcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblx0XHRAbGFiZWwueSA9IEFsaWduLmNlbnRlclxuXHRcdEBsYWJlbC54ID0gMjBcblx0XHRALndpZHRoID0gQGxhYmVsLndpZHRoKzQwXG5cdFxuXHRAZGVmaW5lICdhY3RpdmUnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmFjdGl2ZSBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5mb250RmFtaWx5ID0gc3VibmF2T04uZm9udEZhbWlseVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBzdWJuYXZPTi5jb2xvclxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAbGFiZWwuZm9udEZhbWlseSA9IHN1Ym5hdi5mb250RmFtaWx5XG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IHN1Ym5hdi5jb2xvclxuXG5cbiMjIE1haW4gTmF2IEJ1dHRvbnMgIyNcbmNsYXNzIGV4cG9ydHMubmF2QnV0dCBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pLT5cblx0XHRAb3B0aW9ucy5mb250U2l6ZSA9IG5hdjEuZm9udFNpemVcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IG5hdjEuZm9udEZhbWlseVxuXHRcdEBvcHRpb25zLmNvbG9yID89IG5hdjEuY29sb3Jcblx0XHRAb3B0aW9ucy50ZXh0QWxpZ24gPSBuYXYxLnRleHRBbGlnblxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPSBuYXYxLmxldHRlclNwYWNpbmdcblx0XHRAb3B0aW9ucy50ZXh0VHJhbnNmb3JtID0gbmF2MS50ZXh0VHJhbnNmb3JtXG5cdFx0QG9wdGlvbnMubGluZUhlaWdodCA9IG5hdjEubGluZUhlaWdodFxuXHRcdEBvcHRpb25zLnRleHQgPz0gXCJNYWluIE5hdlwiXG5cdFx0QG9wdGlvbnMuYWN0aXZlID89IGZhbHNlXG5cdFx0aWYgQG9wdGlvbnMuYWN0aXZlIGlzIHRydWVcblx0XHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPSBuYXYxT04uZm9udEZhbWlseVxuXHRcdFx0QG9wdGlvbnMuY29sb3IgPSBuYXYxT04uY29sb3Jcblx0XHRcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiAwXG5cdFx0XHR3aWR0aDogMTAyXG5cdFx0XHRoZWlnaHQ6IDc2XG4jXHRcdFx0Ym9yZGVyQ29sb3I6IGJsYWNrXG4jXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblxuXHRcdEBhc3NldCA9IG5ldyBMYXllclxuXHRcdFx0bmFtZTogXCJhc3NldFwiXG5cdFx0XHRoZWlnaHQ6IDQ4XG5cdFx0XHR3aWR0aDogNDhcblx0XHRcdGltYWdlOiBAb3B0aW9ucy5pY29uXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmZvbnRTaXplXG5cdFx0XHR0ZXh0QWxpZ246IEBvcHRpb25zLnRleHRBbGlnblxuXHRcdFx0bGV0dGVyU3BhY2luZzogQG9wdGlvbnMubGV0dGVyU3BhY2luZ1xuXHRcdFx0bGluZUhlaWdodDogQG9wdGlvbnMubGluZUhlaWdodFxuXHRcdFx0dGV4dFRyYW5zZm9ybTogQG9wdGlvbnMudGV4dFRyYW5zZm9ybVxuXHRcdFx0cGFkZGluZzogQG9wdGlvbnMucGFkZGluZ1xuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLmNvbG9yXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy50ZXh0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHQjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QC53aWR0aCA9IEBsYWJlbC53aWR0aFxuXG5cdFx0QGFzc2V0LnBhcmVudCA9IEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0XG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5ib3R0b21cblx0XHRAbGFiZWwueCA9IEBhc3NldC54ID0gQWxpZ24uY2VudGVyKClcblx0XHRcblx0XHQjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRAZGVmaW5lICdhY3RpdmUnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmFjdGl2ZSBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5mb250RmFtaWx5ID0gbmF2MU9OLmZvbnRGYW1pbHlcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gbmF2MU9OLmNvbG9yXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBsYWJlbC5mb250RmFtaWx5ID0gbmF2MS5mb250RmFtaWx5XG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IG5hdjEuY29sb3JcdFxuXG5cblxuIyMgUHJvZHVjdCBHcmlkIENhcmRzICMjXG5cbmNsYXNzIGV4cG9ydHMuUHJvZENhcmQgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KS0+XG5cdFx0QG9wdGlvbnMud2lkdGggPSAkcHJvZENhcmQud2lkdGhcblx0XHRAb3B0aW9ucy5oZWlnaHQgPSAkcHJvZENhcmQuaGVpZ2h0XG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gbnVsbFxuXHRcdEBvcHRpb25zLnN0eWxlID1cblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEBvcHRpb25zLnNwYWNlcnNPTiA/PSBmYWxzZVxuXHRcdGlmIEBvcHRpb25zLnNwYWNlcnNPTiBpcyBmYWxzZVxuXHRcdFx0QHNwYWNlcl9iZyA9IGNsZWFyXG5cdFx0XHRAc3BhY2VyMl9iZyA9IGNsZWFyXG5cdFx0XHRAZ3V0dGVyX3Byb3BzID0gY2xlYXJcblx0XHRlbHNlXG5cdFx0XHRAc3BhY2VyX2JnID0gUENzcGFjZXIxLmJhY2tncm91bmRDb2xvclxuXHRcdFx0QHNwYWNlcjJfYmcgPSBQQ2ltYWdlU3BhY2VyLmJhY2tncm91bmRDb2xvclxuXHRcdFx0QGd1dHRlcl9wcm9wcyA9IFBDZ3V0dGVyTC5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRAb3B0aW9ucy5leGNlcHRpb24gPz0gdHJ1ZVxuXHRcdGlmIEBvcHRpb25zLmV4Y2VwdGlvbiBpcyB0cnVlXG5cdFx0XHRAb3B0aW9ucy52aXNpYmxlIGlzIHRydWVcblxuXHRcdEBvcHRpb25zLnByb2R1Y3ROYW1lID89IFwicHJvZHVjdE5hbWVcIlxuXHRcdEBvcHRpb25zLnN1YnRpdGxlID89IFwic3VidGl0bGVcIlxuXHRcdEBvcHRpb25zLnByaWNlID89IFwicHJpY2VcIlxuXHRcdEBvcHRpb25zLlNpemUgPz0gXCJTaXplXCJcblx0XHRAb3B0aW9ucy5jYWwgPz0gXCJjYWxcIlxuXHRcdEBvcHRpb25zLmFzc2V0ID89IFwiaW1hZ2VzL2Rlc2lnbi9zYW5kd2ljaC5wbmdcIlxuXG5cbiMgLS0gR3V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGd1dHRlckwgPSBuZXcgTGF5ZXJcblx0XHRcdGZyYW1lOiBQQ2d1dHRlckwuZnJhbWVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQGd1dHRlcl9wcm9wc1xuXHRcdEBndXR0ZXJSID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENndXR0ZXJSLmZyYW1lXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBndXR0ZXJfcHJvcHNcblxuIyAtLSBDb250YWluZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QGltYWdlQ29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENpbWFnZUNvbnRhaW5lci5mcmFtZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc3BhY2VyMl9iZ1xuXG5cdFx0XG5cdFx0QHRleHRDb250YWluZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHg6IFBDdGV4dC54XG5cdFx0XHR5OiBQQ3RleHQueVxuXHRcdFx0d2lkdGg6IFBDdGV4dC53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCJcblx0XHRcdFx0XG5cbiMgLS0gSW1hZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBtYXNrID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENpbWFnZU1hc2suZnJhbWVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0c2hhZG93czogUENpbWFnZU1hc2suc2hhZG93c1xuXHRcdFx0Ym9yZGVyUmFkaXVzOiBQQ2ltYWdlTWFzay5ib3JkZXJSYWRpdXNcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdFxuXHRcdEBwaWN0dXJlID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENpbWFnZS5mcmFtZVxuXHRcdFx0aW1hZ2U6IEBvcHRpb25zLmFzc2V0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuIyAtLSBUZXh0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAc3BhY2VyMSA9IG5ldyBMYXllclxuXHRcdFx0c2l6ZTogUENzcGFjZXIxLnNpemVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNwYWNlcl9iZ1xuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEB0aXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6IFBDdGl0bGUueFxuXHRcdFx0d2lkdGg6IFBDdGl0bGUud2lkdGhcblx0XHRcdGZvbnRTaXplOiBQQ3RpdGxlLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBQQ3RpdGxlLmZvbnRGYW1pbHlcblx0XHRcdGxpbmVIZWlnaHQ6IFBDdGl0bGUubGluZUhlaWdodFxuXHRcdFx0bGV0dGVyU3BhY2luZzogUEN0aXRsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0XHR0ZXh0QWxpZ246IFBDdGl0bGUudGV4dEFsaWduXG5cdFx0XHRjb2xvcjogUEN0aXRsZS5jb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMucHJvZHVjdE5hbWVcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRcdEBzcGFjZXIyID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiBQQ3NwYWNlcjIuc2l6ZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc3BhY2VyX2JnXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXG5cdFx0QHN1YnRpdGxlID0gbmV3IFRleHRMYXllclxuXHRcdFx0d2lkdGg6IFBDc3VidGl0bGUud2lkdGhcblx0XHRcdGZvbnRTaXplOiBQQ3N1YnRpdGxlLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBQQ3N1YnRpdGxlLmZvbnRGYW1pbHlcblx0XHRcdHRleHRBbGlnbjogUENzdWJ0aXRsZS50ZXh0QWxpZ25cblx0XHRcdGxpbmVIZWlnaHQ6IFBDc3VidGl0bGUubGluZUhlaWdodFxuXHRcdFx0bGV0dGVyU3BhY2luZzogUENzdWJ0aXRsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0XHRjb2xvcjogUENzdWJ0aXRsZS5jb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMuc3VidGl0bGVcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmV4Y2VwdGlvblxuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEBzcGFjZXIzID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiBQQ3NwYWNlcjMuc2l6ZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc3BhY2VyX2JnXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXG5cdFx0QHByaWNlID0gbmV3IFRleHRMYXllclxuXHRcdFx0d2lkdGg6IFBDcHJpY2Uud2lkdGhcblx0XHRcdGZvbnRTaXplOiBQQ3ByaWNlLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBQQ3ByaWNlLmZvbnRGYW1pbHlcblx0XHRcdHRleHRBbGlnbjogUENwcmljZS50ZXh0QWxpZ25cblx0XHRcdGxpbmVIZWlnaHQ6IFBDcHJpY2UubGluZUhlaWdodFxuXHRcdFx0bGV0dGVyU3BhY2luZzogUENwcmljZS5sZXR0ZXJTcGFjaW5nXG5cdFx0XHR0ZXh0OiBQQ3ByaWNlLnRleHRcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHR0ZW1wbGF0ZTpcblx0XHRcdFx0cHJpY2U6IEBvcHRpb25zLnByaWNlXG5cdFx0XHRcdFNpemU6IEBvcHRpb25zLlNpemVcblx0XHRcdFx0Y2FsOiBAb3B0aW9ucy5jYWxcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cbiMgLS0gRU5EIFNVUEVSICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIC0tIEltYWdlIFNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QHBpY3R1cmUucGFyZW50ID0gQG1hc2tcblx0XHRAbWFzay5wYXJlbnQgPSBAaW1hZ2VDb250YWluZXJcblxuIyAtLSBUZXh0IFNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QHNwYWNlcjEucGFyZW50ID0gQHRpdGxlLnBhcmVudCA9IEBzcGFjZXIyLnBhcmVudCA9IEBzdWJ0aXRsZS5wYXJlbnQgPSBAc3BhY2VyMy5wYXJlbnQgPSBAcHJpY2UucGFyZW50ID0gQHRleHRDb250YWluZXJcblxuIyAtLSBNQUlOIFBBUkVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdEBndXR0ZXJMLnBhcmVudCA9IEBndXR0ZXJSLnBhcmVudCA9IEB0ZXh0Q29udGFpbmVyLnBhcmVudCA9IEBpbWFnZUNvbnRhaW5lci5wYXJlbnQgPSBAXG5cbiMgLS0gR2V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIHR1cm4gb24gc3BhY2Vyc1xuXHRAZGVmaW5lICdzcGFjZXJzT04nLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLnNwYWNlcnNPTlxuXHRcdHNldDogLT4gKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuc3BhY2Vyc09OID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLnNwYWNlcnNPTiBpcyB0cnVlXG5cdFx0XHRcdEBzcGFjZXJfYmcgPT0gUENzcGFjZXIxLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRAc3BhY2VyMl9iZyA9PSBQQ2ltYWdlU3BhY2VyLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRAZ3V0dGVyX3Byb3BzID09IFBDZ3V0dGVyTC5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHNwYWNlcl9iZyA9PSBjbGVhclxuXHRcdFx0XHRAc3BhY2VyMl9iZyA9PSBjbGVhclxuXHRcdFx0XHRAZ3V0dGVyX3Byb3BzID09IGNsZWFyXG5cbiMgc2V0IGEgZGF0ZS9kYXlwYXJ0IGV4Y2VwdGlvbiAoaWUgXCJzZXJ2ZWQgdW50aWwgMTFhbVwiKVxuXHRAZGVmaW5lICdleGNlcHRpb24nLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmV4Y2VwdGlvblxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuZXhjZXB0aW9uID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmV4Y2VwdGlvbiBpcyB0cnVlXG5cdFx0XHRcdEBzdWJ0aXRsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc3VidGl0bGUudmlzaWJsZSA9IGZhbHNlXG5cbiMgLS0tLS0tLS0gRU5EIE9GIENMQVNTIC0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBOztBREFBO0FBQUEsSUFBQSxxSUFBQTtFQUFBOzs7QUFFQSxLQUFBLEdBQVksSUFBQSxLQUFBLENBQU8sTUFBUDs7QUFDWixLQUFBLEdBQVksSUFBQSxLQUFBLENBQU8sTUFBUDs7QUFDWixJQUFBLEdBQVcsSUFBQSxLQUFBLENBQU8sU0FBUDs7QUFDWCxNQUFBLEdBQWEsSUFBQSxLQUFBLENBQU0sb0JBQU47O0FBQ2IsUUFBQSxHQUFlLElBQUEsS0FBQSxDQUFPLFNBQVA7O0FBQ2YsT0FBQSxHQUFjLElBQUEsS0FBQSxDQUFPLFNBQVA7O0FBQ2QsU0FBQSxHQUFnQixJQUFBLEtBQUEsQ0FBTyxTQUFQOztBQUNoQixTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUFPLFNBQVA7O0FBQ2hCLFdBQUEsR0FBa0IsSUFBQSxLQUFBLENBQU8sU0FBUDs7QUFDbEIsUUFBQSxHQUFlLElBQUEsS0FBQSxDQUFPLFNBQVA7O0FBQ2YsS0FBQSxHQUFROzs7QUFHUjs7QUFFQSxFQUFBLEdBQ0M7RUFBQSxJQUFBLEVBQU0sOEJBQU47RUFDQSxTQUFBLEVBQVcsUUFEWDtFQUVBLEtBQUEsRUFBTyxTQUZQO0VBR0EsYUFBQSxFQUFlLENBQUMsSUFIaEI7RUFJQSxPQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQUssQ0FBQyxDQUFOO0lBQ0EsTUFBQSxFQUFRLENBQUMsQ0FEVDtHQUxEOzs7QUFRRCxJQUFBLEdBQ0M7RUFBQSxRQUFBLEVBQVUsRUFBVjtFQUNBLFNBQUEsRUFBVyxNQURYO0VBRUEsYUFBQSxFQUFlLEVBRmY7RUFH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
