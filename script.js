function saveData() {
  const editableFields = document.querySelectorAll('[contenteditable="true"]');
  editableFields.forEach((field, index) => {
      localStorage.setItem(`field${index}`, field.innerHTML);
  });
}

function loadData() {
  const editableFields = document.querySelectorAll('[contenteditable="false"]');
  editableFields.forEach((field, index) => {
      const savedData = localStorage.getItem(`field${index}`);
      if (savedData) {
          field.innerHTML = savedData;
      }
  });
}

function toggleEditMode() {
  const editableFields = document.querySelectorAll('[contenteditable]');
  const editBtn = document.getElementById('edit-btn');

  if (editableFields.length === 0) {
      console.error("未找到可編輯的欄位");
      return; // 終止函數
  }

  const isEditable = editableFields[0].getAttribute('contenteditable') === 'true';

  if (isEditable) {
      // 如果目前是編輯模式，儲存數據
      saveData();
      editableFields.forEach(field => field.setAttribute('contenteditable', 'false'));
      editBtn.textContent = '進入編輯模式';
  } else {
      // 切換到編輯模式
      editableFields.forEach(field => field.setAttribute('contenteditable', 'true'));
      editBtn.textContent = '儲存並退出編輯模式';
  }
}

// 當頁面加載時，載入數據
window.onload = function() {
  loadData();
};
