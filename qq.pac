function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
} else if (host == "wup.imtt.qq.com"
           || host.endsWith("y.qq.com")
           //|| host.endsWith(".bilibili.com")
           || host == "monitor.music.qq.com"
           //|| host == "api.bilibili.com"
           //|| host == "www.bilibili.com"
           //|| host.endsWith("video.qq.com")
           //|| host.endsWith("v.qq.com")
           //|| host.endsWith("btrace.qq.com")
           //|| host.endsWith("dp3.qq.com")
           || host.endsWith("l.qq.com")
          ){
    return "PROXY 121.5.192.40:2408; DIRECT";
  }
  return "DIRECT";
}
