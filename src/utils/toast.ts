export default function showToast(message: string) {
  const toast = document.getElementById('toast');
  toast!.textContent = message;
  toast!.style.opacity = '1';
  setTimeout(() => {
    toast!.style.opacity = '0';
  }, 3000);
}
