! function(e) {
	e.fn.slide = function(t) {
		return e.fn.slide.defaults = {
			type: "slide",
			effect: "fade",
			autoPlay: !1,
			delayTime: 500,
			interTime: 2500,
			triggerTime: 150,
			defaultIndex: 0,
			titCell: ".hd li",
			mainCell: ".bd",
			targetCell: null,
			trigger: "mouseover",
			scroll: 1,
			vis: 1,
			titOnClassName: "on",
			autoPage: !1,
			prevCell: ".prev",
			nextCell: ".next",
			pageStateCell: ".pageState",
			opp: !1,
			pnLoop: !0,
			easing: "swing",
			startFun: null,
			endFun: null,
			switchLoad: null,
			playStateCell: ".playState",
			mouseOverStop: !0,
			defaultPlay: !0,
			returnDefault: !1
		}, this.each(function() {
			var a = e.extend({}, e.fn.slide.defaults, t),
				n = e(this),
				i = a.effect,
				s = e(a.prevCell, n),
				r = e(a.nextCell, n),
				o = e(a.pageStateCell, n),
				u = e(a.playStateCell, n),
				l = e(a.titCell, n),
				c = l.size(),
				f = e(a.mainCell, n),
				p = f.children().size(),
				d = a.switchLoad,
				h = e(a.targetCell, n),
				v = parseInt(a.defaultIndex),
				m = parseInt(a.delayTime),
				g = parseInt(a.interTime);
			parseInt(a.triggerTime);
			var w, I = parseInt(a.scroll),
				M = parseInt(a.vis),
				C = "false" == a.autoPlay || 0 == a.autoPlay ? !1 : !0,
				y = "false" == a.opp || 0 == a.opp ? !1 : !0,
				x = "false" == a.autoPage || 0 == a.autoPage ? !1 : !0,
				O = "false" == a.pnLoop || 0 == a.pnLoop ? !1 : !0,
				b = "false" == a.mouseOverStop || 0 == a.mouseOverStop ? !1 : !0,
				q = "false" == a.defaultPlay || 0 == a.defaultPlay ? !1 : !0,
				k = "false" == a.returnDefault || 0 == a.returnDefault ? !1 : !0,
				P = 0,
				Q = 0,
				S = 0,
				T = 0,
				L = a.easing,
				j = null,
				B = null,
				D = null,
				F = a.titOnClassName,
				E = l.index(n.find("." + F)),
				W = v = defaultIndex = -1 == E ? v : E,
				z = v,
				A = p >= M ? 0 != p % I ? p % I : I : 0,
				N = "leftMarquee" == i || "topMarquee" == i ? !0 : !1,
				U = function() {
					e.isFunction(a.startFun) && a.startFun(v, c, n, e(a.titCell, n), f, h, s, r)
				},
				H = function() {
					e.isFunction(a.endFun) && a.endFun(v, c, n, e(a.titCell, n), f, h, s, r)
				},
				$ = function() {
					l.removeClass(F), q && l.eq(defaultIndex).addClass(F)
				};
			if ("menu" == a.type) return q && l.removeClass(F).eq(v).addClass(F), l.hover(function() {
				w = e(this).find(a.targetCell);
				var t = l.index(e(this));
				B = setTimeout(function() {
					switch (v = t, l.removeClass(F).eq(v).addClass(F), U(), i) {
						case "fade":
							w.stop(!0, !0).animate({
								opacity: "show"
							}, m, L, H);
							break;
						case "slideDown":
							w.stop(!0, !0).animate({
								height: "show"
							}, m, L, H)
					}
				}, a.triggerTime)
			}, function() {
				switch (clearTimeout(B), i) {
					case "fade":
						w.animate({
							opacity: "hide"
						}, m, L);
						break;
					case "slideDown":
						w.animate({
							height: "hide"
						}, m, L)
				}
			}), void(k && n.hover(function() {
				clearTimeout(D)
			}, function() {
				D = setTimeout($, m)
			}));
			if (0 == c && (c = p), N && (c = 2), x) {
				if (p >= M)
					if ("leftLoop" == i || "topLoop" == i) c = 0 != p % I ? (0 ^ p / I) + 1 : p / I;
					else {
						var G = p - M;
						c = 1 + parseInt(0 != G % I ? G / I + 1 : G / I), 0 >= c && (c = 1)
					} else c = 1;
				l.html("");
				var J = "";
				if (1 == a.autoPage || "true" == a.autoPage)
					for (var K = 0; c > K; K++) J += "<li>" + (K + 1) + "</li>";
				else
					for (var K = 0; c > K; K++) J += a.autoPage.replace("$", K + 1);
				l.html(J);
				var l = l.children()
			}
			if (p >= M) {
				f.children().each(function() {
					e(this).width() > S && (S = e(this).width(), Q = e(this).outerWidth(!0)), e(this).height() > T && (T = e(this).height(), P = e(this).outerHeight(!0))
				});
				var R = f.children(),
					V = function() {
						for (var e = 0; M > e; e++) R.eq(e).clone().addClass("clone").appendTo(f);
						for (var e = 0; A > e; e++) R.eq(p - e - 1).clone().addClass("clone").prependTo(f)
					};
				switch (i) {
					case "fold":
						f.css({
							position: "relative",
							width: Q,
							height: P
						}).children().css({
							position: "absolute",
							width: S,
							left: 0,
							top: 0,
							display: "none"
						});
						break;
					case "top":
						f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + M * P + 'px"></div>').css({
							top: -(v * I) * P,
							position: "relative",
							padding: "0",
							margin: "0"
						}).children().css({
							height: T
						});
						break;
					case "left":
						f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + M * Q + 'px"></div>').css({
							width: p * Q,
							left: -(v * I) * Q,
							position: "relative",
							overflow: "hidden",
							padding: "0",
							margin: "0"
						}).children().css({
							"float": "left",
							width: S
						});
						break;
					case "leftLoop":
					case "leftMarquee":
						V(), f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + M * Q + 'px"></div>').css({
							width: (p + M + A) * Q,
							position: "relative",
							overflow: "hidden",
							padding: "0",
							margin: "0",
							left: -(A + v * I) * Q
						}).children().css({
							"float": "left",
							width: S
						});
						break;
					case "topLoop":
					case "topMarquee":
						V(), f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + M * P + 'px"></div>').css({
							height: (p + M + A) * P,
							position: "relative",
							padding: "0",
							margin: "0",
							top: -(A + v * I) * P
						}).children().css({
							height: T
						})
				}
			}
			var X = function(e) {
					var t = e * I;
					return e == c ? t = p : -1 == e && 0 != p % I && (t = -p % I), t
				},
				Y = function(t) {
					var a = function(a) {
						for (var n = a; M + a > n; n++) t.eq(n).find("img[" + d + "]").each(function() {
							var t = e(this);
							if (t.attr("src", t.attr(d)).removeAttr(d), f.find(".clone")[0])
								for (var a = f.children(), n = 0; a.size() > n; n++) a.eq(n).find("img[" + d + "]").each(function() {
									e(this).attr(d) == t.attr("src") && e(this).attr("src", e(this).attr(d)).removeAttr(d)
								})
						})
					};
					switch (i) {
						case "fade":
						case "fold":
						case "top":
						case "left":
						case "slideDown":
							a(v * I);
							break;
						case "leftLoop":
						case "topLoop":
							a(A + X(z));
							break;
						case "leftMarquee":
						case "topMarquee":
							var n = "leftMarquee" == i ? f.css("left").replace("px", "") : f.css("top").replace("px", ""),
								s = "leftMarquee" == i ? Q : P,
								r = A;
							if (0 != n % s) {
								var o = Math.abs(0 ^ n / s);
								r = 1 == v ? A + o : A + o - 1
							}
							a(r)
					}
				},
				Z = function(e) {
					if (!q || W != v || e || N) {
						if (N ? v >= 1 ? v = 1 : 0 >= v && (v = 0) : (z = v, v >= c ? v = 0 : 0 > v && (v = c - 1)), U(), null != d && Y(f.children()), h[0] && (w = h.eq(v), null != d && Y(h), "slideDown" == i ? (h.not(w).stop(!0, !0).slideUp(m), w.slideDown(m, L, function() {
								f[0] || H()
							})) : (h.not(w).stop(!0, !0).hide(), w.animate({
								opacity: "show"
							}, m, function() {
								f[0] || H()
							}))), p >= M) switch (i) {
							case "fade":
								f.children().stop(!0, !0).eq(v).animate({
									opacity: "show"
								}, m, L, function() {
									H()
								}).siblings().hide();
								break;
							case "fold":
								f.children().stop(!0, !0).eq(v).animate({
									opacity: "show"
								}, m, L, function() {
									H()
								}).siblings().animate({
									opacity: "hide"
								}, m, L);
								break;
							case "top":
								f.stop(!0, !1).animate({
									top: -v * I * P
								}, m, L, function() {
									H()
								});
								break;
							case "left":
								f.stop(!0, !1).animate({
									left: -v * I * Q
								}, m, L, function() {
									H()
								});
								break;
							case "leftLoop":
								var t = z;
								f.stop(!0, !0).animate({
									left: -(X(z) + A) * Q
								}, m, L, function() {
									-1 >= t ? f.css("left", -(A + (c - 1) * I) * Q) : t >= c && f.css("left", -A * Q), H()
								});
								break;
							case "topLoop":
								var t = z;
								f.stop(!0, !0).animate({
									top: -(X(z) + A) * P
								}, m, L, function() {
									-1 >= t ? f.css("top", -(A + (c - 1) * I) * P) : t >= c && f.css("top", -A * P), H()
								});
								break;
							case "leftMarquee":
								var a = f.css("left").replace("px", "");
								0 == v ? f.animate({
									left: ++a
								}, 0, function() {
									f.css("left").replace("px", "") >= 0 && f.css("left", -p * Q)
								}) : f.animate({
									left: --a
								}, 0, function() {
									-(p + A) * Q >= f.css("left").replace("px", "") && f.css("left", -A * Q)
								});
								break;
							case "topMarquee":
								var n = f.css("top").replace("px", "");
								0 == v ? f.animate({
									top: ++n
								}, 0, function() {
									f.css("top").replace("px", "") >= 0 && f.css("top", -p * P)
								}) : f.animate({
									top: --n
								}, 0, function() {
									-(p + A) * P >= f.css("top").replace("px", "") && f.css("top", -A * P)
								})
						}
						l.removeClass(F).eq(v).addClass(F), W = v, O || (r.removeClass("nextStop"), s.removeClass("prevStop"), 0 == v && s.addClass("prevStop"), v == c - 1 && r.addClass("nextStop")), o.html("<span>" + (v + 1) + "</span>/" + c)
					}
				};
			q && Z(!0), k && n.hover(function() {
				clearTimeout(D)
			}, function() {
				D = setTimeout(function() {
					v = defaultIndex, q ? Z() : "slideDown" == i ? w.slideUp(m, $) : w.animate({
						opacity: "hide"
					}, m, $), W = v
				}, 300)
			});
			var _ = function(e) {
					j = setInterval(function() {
						y ? v-- : v++, Z()
					}, e ? e : g)
				},
				et = function(e) {
					j = setInterval(Z, e ? e : g)
				},
				tt = function() {
					b || (clearInterval(j), _())
				},
				at = function() {
					(O || v != c - 1) && (v++, Z(), N || tt())
				},
				nt = function() {
					(O || 0 != v) && (v--, Z(), N || tt())
				},
				it = function() {
					clearInterval(j), N ? et() : _(), u.removeClass("pauseState")
				},
				st = function() {
					clearInterval(j), u.addClass("pauseState")
				};
			if (C ? N ? (y ? v-- : v++, et(), b && f.hover(st, it)) : (_(), b && n.hover(st, it)) : (N && (y ? v-- : v++), u.addClass("pauseState")), u.click(function() {
					u.hasClass("pauseState") ? it() : st()
				}), "mouseover" == a.trigger ? l.hover(function() {
					var e = l.index(this);
					B = setTimeout(function() {
						v = e, Z(), tt()
					}, a.triggerTime)
				}, function() {
					clearTimeout(B)
				}) : l.click(function() {
					v = l.index(this), Z(), tt()
				}), N) {
				if (r.mousedown(at), s.mousedown(nt), O) {
					var rt, ot = function() {
							rt = setTimeout(function() {
								clearInterval(j), et(0 ^ g / 10)
							}, 150)
						},
						ut = function() {
							clearTimeout(rt), clearInterval(j), et()
						};
					r.mousedown(ot), r.mouseup(ut), s.mousedown(ot), s.mouseup(ut)
				}
				"mouseover" == a.trigger && (r.hover(at, function() {}), s.hover(nt, function() {}))
			} else r.click(at), s.click(nt)
		})
	}
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(e, t, a, n, i) {
		return jQuery.easing[jQuery.easing.def](e, t, a, n, i)
	},
	easeInQuad: function(e, t, a, n, i) {
		return n * (t /= i) * t + a
	},
	easeOutQuad: function(e, t, a, n, i) {
		return -n * (t /= i) * (t - 2) + a
	},
	easeInOutQuad: function(e, t, a, n, i) {
		return 1 > (t /= i / 2) ? n / 2 * t * t + a : -n / 2 * (--t * (t - 2) - 1) + a
	},
	easeInCubic: function(e, t, a, n, i) {
		return n * (t /= i) * t * t + a
	},
	easeOutCubic: function(e, t, a, n, i) {
		return n * ((t = t / i - 1) * t * t + 1) + a
	},
	easeInOutCubic: function(e, t, a, n, i) {
		return 1 > (t /= i / 2) ? n / 2 * t * t * t + a : n / 2 * ((t -= 2) * t * t + 2) + a
	},
	easeInQuart: function(e, t, a, n, i) {
		return n * (t /= i) * t * t * t + a
	},
	easeOutQuart: function(e, t, a, n, i) {
		return -n * ((t = t / i - 1) * t * t * t - 1) + a
	},
	easeInOutQuart: function(e, t, a, n, i) {
		return 1 > (t /= i / 2) ? n / 2 * t * t * t * t + a : -n / 2 * ((t -= 2) * t * t * t - 2) + a
	},
	easeInQuint: function(e, t, a, n, i) {
		return n * (t /= i) * t * t * t * t + a
	},
	easeOutQuint: function(e, t, a, n, i) {
		return n * ((t = t / i - 1) * t * t * t * t + 1) + a
	},
	easeInOutQuint: function(e, t, a, n, i) {
		return 1 > (t /= i / 2) ? n / 2 * t * t * t * t * t + a : n / 2 * ((t -= 2) * t * t * t * t + 2) + a
	},
	easeInSine: function(e, t, a, n, i) {
		return -n * Math.cos(t / i * (Math.PI / 2)) + n + a
	},
	easeOutSine: function(e, t, a, n, i) {
		return n * Math.sin(t / i * (Math.PI / 2)) + a
	},
	easeInOutSine: function(e, t, a, n, i) {
		return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + a
	},
	easeInExpo: function(e, t, a, n, i) {
		return 0 == t ? a : n * Math.pow(2, 10 * (t / i - 1)) + a
	},
	easeOutExpo: function(e, t, a, n, i) {
		return t == i ? a + n : n * (-Math.pow(2, -10 * t / i) + 1) + a
	},
	easeInOutExpo: function(e, t, a, n, i) {
		return 0 == t ? a : t == i ? a + n : 1 > (t /= i / 2) ? n / 2 * Math.pow(2, 10 * (t - 1)) + a : n / 2 * (-Math.pow(2, -10 * --t) + 2) + a
	},
	easeInCirc: function(e, t, a, n, i) {
		return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + a
	},
	easeOutCirc: function(e, t, a, n, i) {
		return n * Math.sqrt(1 - (t = t / i - 1) * t) + a
	},
	easeInOutCirc: function(e, t, a, n, i) {
		return 1 > (t /= i / 2) ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + a : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + a
	},
	easeInElastic: function(e, t, a, n, i) {
		var s = 1.70158,
			r = 0,
			o = n;
		if (0 == t) return a;
		if (1 == (t /= i)) return a + n;
		if (r || (r = .3 * i), Math.abs(n) > o) {
			o = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / o);
		return -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - s) * Math.PI / r)) + a
	},
	easeOutElastic: function(e, t, a, n, i) {
		var s = 1.70158,
			r = 0,
			o = n;
		if (0 == t) return a;
		if (1 == (t /= i)) return a + n;
		if (r || (r = .3 * i), Math.abs(n) > o) {
			o = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / o);
		return o * Math.pow(2, -10 * t) * Math.sin(2 * (t * i - s) * Math.PI / r) + n + a
	},
	easeInOutElastic: function(e, t, a, n, i) {
		var s = 1.70158,
			r = 0,
			o = n;
		if (0 == t) return a;
		if (2 == (t /= i / 2)) return a + n;
		if (r || (r = .3 * i * 1.5), Math.abs(n) > o) {
			o = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / o);
		return 1 > t ? -.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - s) * Math.PI / r) + a : .5 * o * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * i - s) * Math.PI / r) + n + a
	},
	easeInBack: function(e, t, a, n, i, s) {
		return void 0 == s && (s = 1.70158), n * (t /= i) * t * ((s + 1) * t - s) + a
	},
	easeOutBack: function(e, t, a, n, i, s) {
		return void 0 == s && (s = 1.70158), n * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + a
	},
	easeInOutBack: function(e, t, a, n, i, s) {
		return void 0 == s && (s = 1.70158), 1 > (t /= i / 2) ? n / 2 * t * t * (((s *= 1.525) + 1) * t - s) + a : n / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + a
	},
	easeInBounce: function(e, t, a, n, i) {
		return n - jQuery.easing.easeOutBounce(e, i - t, 0, n, i) + a
	},
	easeOutBounce: function(e, t, a, n, i) {
		return 1 / 2.75 > (t /= i) ? 7.5625 * n * t * t + a : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + a : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + a : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + a
	},
	easeInOutBounce: function(e, t, a, n, i) {
		return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, i) + a : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, n, i) + .5 * n + a
	}
});;

function popOpen(i) {
	$(i).show().css({
		"margin-left": -$(i).width() / 2,
		"margin-top": -$(i).height() / 2
	}), $("#fade").show(), $(".play").removeClass("play-on")
}

function popClose() {
	$("#fade,.pop").hide(), $(".video-box").empty(), $(".play").addClass("play-on")
}
nie.config.copyRight.setWhite();
var sharePic = $("#share_pic").attr("data-src"),
	shareTitle = $("#share_title").html();
nie.define("Model", function() {
	var i = nie.require("nie.util.shareV5");
	return i({
		fat: "#share",
		type: 1,
		defShow: [23, 22, 2, 1, 3],
		title: shareTitle,
		img: sharePic
	}), {
		init: function() {}
	}
}), $(".pic-main li:first").addClass("on").animate({
	width: "466px"
}), $(".pic-main li:first").find(".img1").stop().animate({
	opacity: 0
}), $(".pic-main li:first").find(".img2").stop().animate({
	opacity: 1
}), $(".pic-main li").hover(function() {
	$(this).stop().animate({
		width: "466px"
	}).siblings().stop().animate({
		width: "103px"
	}), $(this).find(".img1").stop().animate({
		opacity: 0
	}), $(this).siblings().find(".img1").stop().animate({
		opacity: 1
	}), $(this).find(".img2").stop().animate({
		opacity: 1
	}), $(this).siblings().find(".img2").stop().animate({
		opacity: 0
	})
}), $(".play-btn").click(function() {
	var i = $(this).attr("data-url"),
		t = i.replace("f4v", "mp4") || i.replace("flv", "mp4");
	nie.use(["nie.util.video"], function() {
		nie.util.video($(".video-box"), {
			movieUrl: i,
			mp4_movieUrl: t,
			width: 800,
			height: 450,
			bufferTime: 5,
			loopTimes: 0,
			wmode: "transparent",
			volume: .8,
			autoPlay: 1
		})
	}), popOpen(".dialogBox")
}), $(".pop_close").click(function() {
	popClose()
}), jQuery(".slideBox").slide({
	titCell: ".hd ul",
	mainCell: ".bd",
	autoPage: !0,
	autoPlay: !0,
	effect: "left"
});