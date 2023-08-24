"use strict";(self.webpackChunkdashticz=self.webpackChunkdashticz||[]).push([[475],{5475:function(n,t,e){e.r(t),t.default="function number_format(number, decimals, decPoint, thousandsSep) {\n  // eslint-disable-line camelcase\n  number = (number + '').replace(/[^0-9+\\-Ee.]/g, '');\n  var n = !isFinite(+number) ? 0 : +number;\n  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);\n  var sep =\n    typeof thousandsSep === 'undefined' ? _THOUSAND_SEPARATOR : thousandsSep;\n  var dec = typeof decPoint === 'undefined' ? _DECIMAL_POINT : decPoint;\n  var s = '';\n  var toFixedFix = function (n, prec) {\n    var k = Math.pow(10, prec);\n    return '' + (Math.round(n * k) / k).toFixed(prec);\n  };\n  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;\n  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');\n  if (s[0].length > 3) {\n    s[0] = s[0].replace(/\\B(?=(?:\\d{3})+(?!\\d))/g, sep);\n  }\n  if ((s[1] || '').length < prec) {\n    s[1] = s[1] || '';\n    s[1] += new Array(prec - s[1].length + 1).join('0');\n  }\n  return s.join(dec);\n}\n\n/**\n * Simple log function to log to the console if debug is true (set this in CONFIG.js)\n * @param message\n */\nfunction log(message) {\n  if (config['debug']) {\n    console.log(message);\n  }\n}\n\n/* Timeout if index.html is not loading correct */\nfunction showIt() {\n  document.getElementById('hide').style.visibility = 'visible';\n}\nsetTimeout('showIt()', 3000); // after 3 sec\n\nfunction setSrc(cur) {\n  $($(cur).data('target')).on('hidden.bs.modal', function () {\n    $($(cur).data('target')).find('iframe').removeAttr('src');\n  });\n  if (\n    typeof $($(cur).data('target')).find('iframe').attr('src') == 'undefined'\n  ) {\n    $($(cur).data('target'))\n      .find('iframe')\n      .attr('src', $($(cur).data('target')).find('iframe').data('popup'));\n  }\n}\n\nfunction hexToRgb(hex) {\n  hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);\n  return { r: hex >> 16, g: (hex & 0x00ff00) >> 8, b: hex & 0x0000ff };\n}\n\nfunction hexToHsb(hex) {\n  return rgbToHsb(hexToRgb(hex));\n}\n\nfunction rgbToHsb(rgb) {\n  var hsb = { h: 0, s: 0, b: 0 };\n  var min = Math.min(rgb.r, rgb.g, rgb.b);\n  var max = Math.max(rgb.r, rgb.g, rgb.b);\n  var delta = max - min;\n  hsb.b = max;\n  hsb.s = max != 0 ? (255 * delta) / max : 0;\n  if (hsb.s != 0) {\n    if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;\n    else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;\n    else hsb.h = 4 + (rgb.r - rgb.g) / delta;\n  } else hsb.h = -1;\n  hsb.h *= 60;\n  if (hsb.h < 0) hsb.h += 360;\n  hsb.s *= 100 / 255;\n  hsb.b *= 100 / 255;\n  return hsb;\n}\n\nfunction ksort(inputArr, sort_flags) {\n  // http://jsphp.co/jsphp/fn/view/ksort\n  // +   original by: GeekFG (http://geekfg.blogspot.com)\n  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)\n  // +   improved by: Brett Zamir (http://brett-zamir.me)\n  // %          note 1: The examples are correct, this is a new way\n  // %        note 2: This function deviates from PHP in returning a copy of the array instead\n  // %        note 2: of acting by reference and returning true; this was necessary because\n  // %        note 2: IE does not allow deleting and re-adding of properties without caching\n  // %        note 2: of property position; you can set the ini of \"phpjs.strictForIn\" to true to\n  // %        note 2: get the PHP behavior, but use this only if you are in an environment\n  // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true\n  // %        note 2: property deletion is supported. Note that we intend to implement the PHP\n  // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since\n  // %        note 2: is by reference in PHP anyways\n  // %        note 3: Since JS objects' keys are always strings, and (the\n  // %        note 3: default) SORT_REGULAR flag distinguishes by key type,\n  // %        note 3: if the content is a numeric string, we treat the\n  // %        note 3: \"original type\" as numeric.\n  // -    depends on: i18n_loc_get_default\n  // -    depends on: strnatcmp\n  // *     example 1: data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};\n  // *     example 1: data = ksort(data);\n  // *     results 1: {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}\n  // *     example 2: ini_set('phpjs.strictForIn', true);\n  // *     example 2: data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'};\n  // *     example 2: ksort(data);\n  // *     results 2: data == {1: 'Kevin', 2: 'van', 3: 'Zonneveld'}\n  // *     returns 2: true\n  var tmp_arr = {},\n    keys = [],\n    sorter,\n    i,\n    k,\n    that = this,\n    strictForIn = false,\n    populateArr = {};\n\n  switch (sort_flags) {\n    case 'SORT_STRING':\n      // compare items as strings\n      sorter = function (a, b) {\n        return that.strnatcmp(a, b);\n      };\n      break;\n    case 'SORT_LOCALE_STRING':\n      // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)\n      var loc = this.i18n_loc_get_default();\n      sorter = this.php_js.i18nLocales[loc].sorting;\n      break;\n    case 'SORT_NUMERIC':\n      // compare items numerically\n      sorter = function (a, b) {\n        return a + 0 - (b + 0);\n      };\n      break;\n    // case 'SORT_REGULAR': // compare items normally (don't change types)\n    default:\n      sorter = function (a, b) {\n        var aFloat = parseFloat(a),\n          bFloat = parseFloat(b),\n          aNumeric = aFloat + '' === a,\n          bNumeric = bFloat + '' === b;\n        if (aNumeric && bNumeric) {\n          return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;\n        } else if (aNumeric && !bNumeric) {\n          return 1;\n        } else if (!aNumeric && bNumeric) {\n          return -1;\n        }\n        return a > b ? 1 : a < b ? -1 : 0;\n      };\n      break;\n  }\n\n  // Make a list of key names\n  for (k in inputArr) {\n    if (inputArr.hasOwnProperty(k)) {\n      keys.push(k);\n    }\n  }\n  keys.sort(sorter);\n\n  // BEGIN REDUNDANT\n  this.php_js = this.php_js || {};\n  this.php_js.ini = this.php_js.ini || {};\n  // END REDUNDANT\n  strictForIn =\n    this.php_js.ini['phpjs.strictForIn'] &&\n    this.php_js.ini['phpjs.strictForIn'].local_value &&\n    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';\n  populateArr = strictForIn ? inputArr : populateArr;\n\n  // Rebuild array with sorted key names\n  for (i = 0; i < keys.length; i++) {\n    k = keys[i];\n    tmp_arr[k] = inputArr[k];\n    if (strictForIn) {\n      delete inputArr[k];\n    }\n  }\n  for (i in tmp_arr) {\n    if (tmp_arr.hasOwnProperty(i)) {\n      populateArr[i] = tmp_arr[i];\n    }\n  }\n\n  return strictForIn || populateArr;\n}\n\nfunction capitalizeFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\n$.getJSONP = function (s) {\n  s.dataType = 'jsonp';\n  $.ajax(s);\n\n  // figure out what the callback fn is\n  var $script = $(document.getElementsByTagName('head')[0].firstChild);\n  var url = $script.attr('src') || '';\n  var cb = (url.match(/callback=(\\w+)/) || [])[1];\n  if (!cb) return; // bail\n  var t = 0,\n    cbFn = window[cb];\n\n  $script[0].onerror = function (e) {\n    $script.remove();\n    handleError(s, {}, 'error', e);\n    clearTimeout(t);\n  };\n\n  if (!s.timeout) return;\n\n  window[cb] = function (json) {\n    clearTimeout(t);\n    cbFn(json);\n    cbFn = null;\n  };\n\n  t = setTimeout(function () {\n    $script.remove();\n    handleError(s, {}, 'timeout');\n    if (cbFn) window[cb] = function () {};\n  }, s.timeout);\n\n  function handleError(s, o, msg, e) {\n    // support jquery versions before and after 1.4.3\n    ($.ajax.handleError || $.handleError)(s, o, msg, e);\n  }\n};\n\n$.handleError = function (s, xhr, status, e) {\n  // If a local callback was specified, fire it\n  if (s.error) {\n    s.error.call(s.context || window, xhr, status, e);\n  }\n\n  // Fire the global callback\n  if (s.global) {\n    (s.context ? jQuery(s.context) : jQuery.event).trigger('ajaxError', [\n      xhr,\n      s,\n      e,\n    ]);\n  }\n};\n\nfunction objectlength(a) {\n  var count = 0;\n  var i;\n\n  for (i in a) {\n    if (a.hasOwnProperty(i)) {\n      count++;\n    }\n  }\n  return count;\n}\n\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction time() {\n  return Math.floor(new Date().getTime() / 1000);\n}\n\nfunction str_replace(find, replace, str) {\n  return str.replace(new RegExp(find, 'g'), replace);\n}\n\nfunction strtotime(text, now) {\n  var parsed,\n    match,\n    today,\n    year,\n    date,\n    days,\n    ranges,\n    len,\n    times,\n    regex,\n    i,\n    fail = false;\n\n  if (!text) {\n    return fail;\n  }\n\n  // Unecessary spaces\n  text = text\n    .replace(/^\\s+|\\s+$/g, '')\n    .replace(/\\s{2,}/g, ' ')\n    .replace(/[\\t\\r\\n]/g, '')\n    .toLowerCase();\n\n  match = text.match(\n    /^(\\d{1,4})([\\-\\.\\/\\:])(\\d{1,2})([\\-\\.\\/\\:])(\\d{1,4})(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?(?:\\s([A-Z]+)?)?$/\n  );\n\n  if (match && match[2] === match[4]) {\n    if (match[1] > 1901) {\n      switch (match[2]) {\n        case '-': {\n          // YYYY-M-D\n          if (match[3] > 12 || match[5] > 31) {\n            return fail;\n          }\n\n          return (\n            new Date(\n              match[1],\n              parseInt(match[3], 10) - 1,\n              match[5],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n        case '.': {\n          // YYYY.M.D is not parsed by strtotime()\n          return fail;\n        }\n        case '/': {\n          // YYYY/M/D\n          if (match[3] > 12 || match[5] > 31) {\n            return fail;\n          }\n\n          return (\n            new Date(\n              match[1],\n              parseInt(match[3], 10) - 1,\n              match[5],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n      }\n    } else if (match[5] > 1901) {\n      switch (match[2]) {\n        case '-': {\n          // D-M-YYYY\n          if (match[3] > 12 || match[1] > 31) {\n            return fail;\n          }\n\n          return (\n            new Date(\n              match[5],\n              parseInt(match[3], 10) - 1,\n              match[1],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n        case '.': {\n          // D.M.YYYY\n          if (match[3] > 12 || match[1] > 31) {\n            return fail;\n          }\n\n          return (\n            new Date(\n              match[5],\n              parseInt(match[3], 10) - 1,\n              match[1],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n        case '/': {\n          // M/D/YYYY\n          if (match[1] > 12 || match[3] > 31) {\n            return fail;\n          }\n\n          return (\n            new Date(\n              match[5],\n              parseInt(match[1], 10) - 1,\n              match[3],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n      }\n    } else {\n      switch (match[2]) {\n        case '-': {\n          // YY-M-D\n          if (\n            match[3] > 12 ||\n            match[5] > 31 ||\n            (match[1] < 70 && match[1] > 38)\n          ) {\n            return fail;\n          }\n\n          year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];\n          return (\n            new Date(\n              year,\n              parseInt(match[3], 10) - 1,\n              match[5],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n        case '.': {\n          // D.M.YY or H.MM.SS\n          if (match[5] >= 70) {\n            // D.M.YY\n            if (match[3] > 12 || match[1] > 31) {\n              return fail;\n            }\n\n            return (\n              new Date(\n                match[5],\n                parseInt(match[3], 10) - 1,\n                match[1],\n                match[6] || 0,\n                match[7] || 0,\n                match[8] || 0,\n                match[9] || 0\n              ) / 1000\n            );\n          }\n          if (match[5] < 60 && !match[6]) {\n            // H.MM.SS\n            if (match[1] > 23 || match[3] > 59) {\n              return fail;\n            }\n\n            today = new Date();\n            return (\n              new Date(\n                today.getFullYear(),\n                today.getMonth(),\n                today.getDate(),\n                match[1] || 0,\n                match[3] || 0,\n                match[5] || 0,\n                match[9] || 0\n              ) / 1000\n            );\n          }\n\n          return fail; // invalid format, cannot be parsed\n        }\n        case '/': {\n          // M/D/YY\n          if (\n            match[1] > 12 ||\n            match[3] > 31 ||\n            (match[5] < 70 && match[5] > 38)\n          ) {\n            return fail;\n          }\n\n          year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];\n          return (\n            new Date(\n              year,\n              parseInt(match[1], 10) - 1,\n              match[3],\n              match[6] || 0,\n              match[7] || 0,\n              match[8] || 0,\n              match[9] || 0\n            ) / 1000\n          );\n        }\n        case ':': {\n          // HH:MM:SS\n          if (match[1] > 23 || match[3] > 59 || match[5] > 59) {\n            return fail;\n          }\n\n          today = new Date();\n          return (\n            new Date(\n              today.getFullYear(),\n              today.getMonth(),\n              today.getDate(),\n              match[1] || 0,\n              match[3] || 0,\n              match[5] || 0\n            ) / 1000\n          );\n        }\n      }\n    }\n  }\n\n  // other formats and \"now\" should be parsed by Date.parse()\n  if (text === 'now') {\n    return now === null || isNaN(now)\n      ? (new Date().getTime() / 1000) | 0\n      : now | 0;\n  }\n  if (!isNaN((parsed = Date.parse(text)))) {\n    return (parsed / 1000) | 0;\n  }\n\n  date = now ? new Date(now * 1000) : new Date();\n  days = {\n    sun: 0,\n    mon: 1,\n    tue: 2,\n    wed: 3,\n    thu: 4,\n    fri: 5,\n    sat: 6,\n  };\n  ranges = {\n    yea: 'FullYear',\n    mon: 'Month',\n    day: 'Date',\n    hou: 'Hours',\n    min: 'Minutes',\n    sec: 'Seconds',\n  };\n\n  function lastNext(type, range, modifier) {\n    var diff,\n      day = days[range];\n\n    if (typeof day !== 'undefined') {\n      diff = day - date.getDay();\n\n      if (diff === 0) {\n        diff = 7 * modifier;\n      } else if (diff > 0 && type === 'last') {\n        diff -= 7;\n      } else if (diff < 0 && type === 'next') {\n        diff += 7;\n      }\n\n      date.setDate(date.getDate() + diff);\n    }\n  }\n\n  function process(val) {\n    var splt = val.split(' '), // Todo: Reconcile this with regex using \\s, taking into account browser issues with split and regexes\n      type = splt[0],\n      range = splt[1].substring(0, 3),\n      typeIsNumber = /\\d+/.test(type),\n      ago = splt[2] === 'ago',\n      num = (type === 'last' ? -1 : 1) * (ago ? -1 : 1);\n\n    if (typeIsNumber) {\n      num *= parseInt(type, 10);\n    }\n\n    if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\\.)?$/i)) {\n      return date['set' + ranges[range]](date['get' + ranges[range]]() + num);\n    }\n\n    if (range === 'wee') {\n      return date.setDate(date.getDate() + num * 7);\n    }\n\n    if (type === 'next' || type === 'last') {\n      lastNext(type, range, num);\n    } else if (!typeIsNumber) {\n      return false;\n    }\n\n    return true;\n  }\n\n  times =\n    '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' +\n    '|sunday|sun\\\\.?|monday|mon\\\\.?|tuesday|tue\\\\.?|wednesday|wed\\\\.?' +\n    '|thursday|thu\\\\.?|friday|fri\\\\.?|saturday|sat\\\\.?)';\n  regex =\n    '([+-]?\\\\d+\\\\s' + times + '|' + '(last|next)\\\\s' + times + ')(\\\\sago)?';\n\n  match = text.match(new RegExp(regex, 'gi'));\n\n  if (!match) {\n    return fail;\n  }\n\n  for (i = 0, len = match.length; i < len; i++) {\n    if (!process(match[i])) {\n      return fail;\n    }\n  }\n\n  // ECMAScript 5 only\n  // if (!match.every(process))\n  //    return false;\n\n  return date.getTime() / 1000;\n}\n\nfunction URLToArray(url) {\n  var request = {};\n  var pairs = url.substring(url.indexOf('?') + 1).split('&');\n  for (var i = 0; i < pairs.length; i++) {\n    if (!pairs[i]) continue;\n    var pair = pairs[i].split('=');\n    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);\n  }\n  return request;\n}\n\nfunction onlyUnique(value, index, self) {\n  return self.indexOf(value) === index;\n}\n\nfunction isDefined(prop) {\n  return typeof prop !== 'undefined' ? true : false;\n}\n\nfunction isObject(prop) {\n  return typeof prop === 'object' ? true : false;\n}\n\nfunction setHeight(obj) {\n  var width = $(obj.mountPoint).width();\n  if (width) obj._width = width;\n  //store width for later reference\n  else width = obj._width; //use previous value\n  return isDefined(obj.block.height) && obj.block.height\n    ? obj.block.height\n    : Math.min(\n        Math.round((width / window.innerWidth) * window.innerHeight - 25),\n        window.innerHeight - 50\n      );\n}\n\n/**\n * Returns number formatted with thousand seperator with specified decimals.\n * @param {object} val      The input number to format.\n * @param {string} decimal  The number of decimal places.\n */\nfunction formatThousand(val, decimal) {\n  var nf = Intl.NumberFormat();\n  var config = {\n    minimumFractionDigits: decimal,\n    maximumFractionDigits: decimal,\n  };\n  return nf.format(val, config);\n}\n\nfunction getLocationParameters() {\n  function transformToAssocArray(prmstr) {\n    var params = {};\n    var prmarr = prmstr.split('&');\n    for (var i = 0; i < prmarr.length; i++) {\n      var tmparr = prmarr[i].split('=');\n      params[tmparr[0]] = decodeURI(tmparr[1]);\n    }\n    return params;\n  }\n  var prmstr = window.location.search.substr(1);\n  return prmstr != null && prmstr != '' ? transformToAssocArray(prmstr) : {};\n}\n"}}]);