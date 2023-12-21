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
           || host == "mesh.if.iqiyi.com"
           || host == "act.vip.iqiyi.com"
           || host == "dfp-business.iqiyi.com"
           || host == "mpaas.iqiyi.com"
           || host == "control-i.iqiyi.com"
          ){
      return "PROXY webproxy.xieweii.com:2408; DIRECT";
  }
  return "DIRECT";
}
