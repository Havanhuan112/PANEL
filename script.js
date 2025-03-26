<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh Sách Game - iGuideCheat</title>
  <!-- Font Awesome (icon) CDN - bạn có thể thay thế link khác hoặc dùng local -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      color: #333;
    }

    header {
      background: #000;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .games-list-section {
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    .games-list-section h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }

    .game-card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 20px;
      margin-bottom: 2rem;
      position: relative;
    }
    .game-card-header {
      position: relative;
      margin-bottom: 1rem;
    }
    .game-card-header img {
      width: 100%;
      border-radius: 8px;
      display: block;
    }
    .update-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #28a745;
      color: #fff;
      font-size: 0.85rem;
      padding: 5px 8px;
      border-radius: 4px;
    }

    .game-card h3 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
    .game-card p {
      margin: 0.5rem 0 1rem;
      color: rgba(0,0,0,0.7);
      text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .game-card label {
      display: block;
      margin-bottom: 0.25rem;
      font-weight: 600;
    }
    .game-card select {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    .buy-button {
      display: inline-block;
      background: #007bff;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      margin-bottom: 1rem;
      transition: background 0.3s ease;
      cursor: pointer;
      font-weight: bold;
    }
    .buy-button:hover {
      background: #0056b3;
    }

    .extra-links {
      display: flex;
      gap: 1rem;
    }
    .extra-links a {
      display: inline-block;
      text-decoration: none;
      color: #fff;
      background: #ff9900;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.3s ease;
    }
    .extra-links a:hover {
      background: #cc7a00;
    }
    .extra-links i {
      margin-right: 0.5rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>IGUIDECHEAT - Danh Sách Game</h1>
  </header>

  <section class="games-list-section">
    <h2>Danh Sách Game</h2>

    <!-- Game Card 1 -->
    <div class="game-card">
      <div class="game-card-header">
        <img src="https://i.pinimg.com/originals/77/30/f1/7730f1dc01b225319269cbc655cc1998.gif" alt="PUBG Mobile">
        <span class="update-badge">Đã cập nhật</span>
      </div>
      <h3>HACK PUBG MOBILE VNG iOS TROLLSTORE</h3>
      <p>Hack PUBG mobile cho thiết bị iOS sử dụng công cụ TrollStore. Hỗ trợ nhiều tính năng, cập nhật thường xuyên.</p>
      <label for="packageSelect1">Chọn Gói</label>
      <select id="packageSelect1">
        <option value="basic">Gói cơ bản</option>
        <option value="premium">Gói cao cấp</option>
      </select>
      <button class="buy-button">Mua Ngay</button>
      <div class="extra-links">
        <a href="#" class="notify-link">
          <i class="fa fa-bell"></i> Kênh thông báo
        </a>
        <a href="#" class="chat-link">
          <i class="fa fa-comments"></i> Nhóm chat
        </a>
      </div>
    </div>

    <!-- Game Card 2 -->
    <div class="game-card">
      <div class="game-card-header">
        <img src="https://i.pinimg.com/originals/77/30/f1/7730f1dc01b225319269cbc655cc1998.gif" alt="Another Game">
        <span class="update-badge">Mới</span>
      </div>
      <h3>Tựa Game Hack Khác</h3>
      <p>Hỗ trợ iOS mới nhất, cài đặt nhanh chóng, an toàn, và nhiều tính năng độc đáo.</p>
      <label for="packageSelect2">Chọn Gói</label>
      <select id="packageSelect2">
        <option value="basic">Gói cơ bản</option>
        <option value="vip">Gói VIP</option>
      </select>
      <button class="buy-button">Mua Ngay</button>
      <div class="extra-links">
        <a href="#" class="notify-link">
          <i class="fa fa-bell"></i> Kênh thông báo
        </a>
        <a href="#" class="chat-link">
          <i class="fa fa-comments"></i> Nhóm chat
        </a>
      </div>
    </div>

    <!-- Bạn có thể thêm nhiều .game-card hơn... -->
  </section>
</body>
</html>