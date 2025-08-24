// Toggle Sections
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
showSection('dashboard'); // default

// Inventory Management
let inventory = [];

function addInventory() {
  let name = document.getElementById('itemName').value.trim();
  let qty = parseInt(document.getElementById('itemQty').value.trim());

  if (!name || isNaN(qty) || qty < 0) return alert("Enter valid item and quantity");

  let item = { name, qty };
  inventory.push(item);
  document.getElementById('itemName').value = "";
  document.getElementById('itemQty').value = "";

  renderInventory();
}

function removeInventory(index) {
  inventory.splice(index, 1);
  renderInventory();
}

function renderInventory() {
  let list = document.getElementById('inventoryList');
  list.innerHTML = "";

  let total = inventory.length;
  let inStock = inventory.filter(i => i.qty > 5).length;
  let lowStock = inventory.filter(i => i.qty > 0 && i.qty <= 5).length;

  document.getElementById('totalItems').innerText = total;
  document.getElementById('inStock').innerText = inStock;
  document.getElementById('lowStock').innerText = lowStock;

  inventory.forEach((item, index) => {
    let status = item.qty === 0 ? "Out of Stock" : (item.qty <= 5 ? "Low Stock" : "In Stock");
    let row = `<tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${status}</td>
      <td><button onclick="removeInventory(${index})">Remove</button></td>
    </tr>`;
    list.innerHTML += row;
  });
}
