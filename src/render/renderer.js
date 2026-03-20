const btn = document.getElementById('selectBtn')
const preview = document.getElementById('preview')
const filePathEl = document.getElementById('filePath')

btn.addEventListener('click', async () => {
  const result = await window.api.selectFile()

  if (!result) return

  filePathEl.innerText = result.filePath
  preview.innerHTML = result.html
})