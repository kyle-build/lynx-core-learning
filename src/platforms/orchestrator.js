// core/orchestrator.js

const platforms = [
  'medium',
  'hashnode',
  'devto',
  'zhihu',
  'csdn',
  'juejin'
]

async function publishAll(content, onUpdate) {
  const results = {}

  await Promise.all(
    platforms.map(async (platform) => {
      // 初始化状态
      onUpdate(platform, 'loading')

      try {
        // 模拟延迟
        await new Promise(r => setTimeout(r, Math.random() * 2000))

        // 模拟成功/失败
        const success = Math.random() > 0.2

        if (!success) throw new Error('fail')

        results[platform] = 'success'
        onUpdate(platform, 'success')
      } catch (e) {
        results[platform] = 'error'
        onUpdate(platform, 'error')
      }
    })
  )

  return results
}

module.exports = { publishAll }