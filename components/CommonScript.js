import BLOG from '@/blog.config'

/**
 * 第三方代码 统计脚本
 * @returns {JSX.Element}
 * @constructor
 */
const CommonScript = () => {
  return (
    <>
      {BLOG.CHATBASE_ID && (
        <>
          <script
            id={BLOG.CHATBASE_ID}
            src="https://www.chatbase.co/embed.min.js"
            defer
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
             window.chatbaseConfig = {
                chatbotId: "${BLOG.CHATBASE_ID}",
            }
        `
            }}
          />
        </>
      )}

      {BLOG.COMMENT_DAO_VOICE_ID && (
        <>
          {/* DaoVoice 反馈 */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/daf1a94b.js","daovoice")
                  `
            }}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                 daovoice('init', {
                    app_id: "${BLOG.COMMENT_DAO_VOICE_ID}"
                  });
                  daovoice('update');
                  `
            }}
          />
        </>
      )}

      {BLOG.COMMENT_CUSDIS_APP_ID && (
        <script defer src="https://cusdis.com/js/widget/lang/zh-cn.js" />
      )}

      {BLOG.COMMENT_TIDIO_ID && (
        <script async src={`//code.tidio.co/${BLOG.COMMENT_TIDIO_ID}.js`} />
      )}

      {/* gitter聊天室 */}
      {BLOG.COMMENT_GITTER_ROOM && (
        <>
          <script
            src="https://sidecar.gitter.im/dist/sidecar.v1.js"
            async
            defer
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                ((window.gitter = {}).chat = {}).options = {
                  room: '${BLOG.COMMENT_GITTER_ROOM}'
                };
                `
            }}
          />
        </>
      )}

      {/* 引入音乐播放 */}
      {JSON.parse(BLOG.MUSIC_PLAYER) && (
        <script async src={BLOG.MUSIC_PLAYER_CDN_URL} />
      )}
      {JSON.parse(BLOG.MUSIC_PLAYER) &&
        JSON.parse(BLOG.MUSIC_PLAYER_METING) && (
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/meting/2.0.1/Meting.min.js"
          />
      )}
    </>
  )
}

export default CommonScript
