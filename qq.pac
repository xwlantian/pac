function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
} else if (host == "u.y.qq.com"
           || host == "monitor.music.qq.com"
           || host == "u6.y.qq.com"
           || host == "c6.y.qq.com"
           || host == "vd.l.qq.com"
           || host == "vd6.l.qq.com"
           || host == "vv.video.qq.com"
           || host == "h5vv.video.qq.com"
           || host == "liveinfo.ysp.cctv.cn"
           || host == "cache.video.iqiyi.com"
           || host == "www.114yygh.com"
           || host == "114yygh.com"
           || host == "vdn.live.cntv.cn"
          ){
      return "PROXY proxy.xieweii.com:3128; DIRECT";
  }
  return "DIRECT";
}
