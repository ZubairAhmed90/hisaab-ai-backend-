-- HisaabAI — MySQL Schema
-- Run: mysql -u root -p hisaabai < schema.sql
-- Or use: node scripts/db-push.js

CREATE TABLE IF NOT EXISTS users (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  account_number      VARCHAR(12) UNIQUE,
  name                VARCHAR(100) NOT NULL,
  email               VARCHAR(150) UNIQUE NOT NULL,
  password_hash       VARCHAR(255) NOT NULL,
  phone               VARCHAR(20),
  preferred_language  VARCHAR(5) NOT NULL DEFAULT 'en',
  monthly_income      DECIMAL(12,2) NOT NULL DEFAULT 0,
  wallet_balance      DECIMAL(14,2) NOT NULL DEFAULT 0,
  account_balance     DECIMAL(14,2) NOT NULL DEFAULT 0,
  is_admin            TINYINT(1) NOT NULL DEFAULT 0,
  reset_token_hash    VARCHAR(255),
  reset_token_expires DATETIME,
  created_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login          DATETIME,
  linked_partner_id   INT,
  FOREIGN KEY (linked_partner_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS spending_limits (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  owner_id         INT NOT NULL,
  target_user_id   INT NOT NULL,
  category         VARCHAR(50) NOT NULL,
  monthly_limit    DECIMAL(12,2) NOT NULL,
  alert_at_percent INT NOT NULL DEFAULT 80,
  is_hard_limit    TINYINT(1) NOT NULL DEFAULT 1,
  is_active        TINYINT(1) NOT NULL DEFAULT 1,
  created_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_owner_target_category (owner_id, target_user_id, category),
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (target_user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS transactions (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  user_id          INT NOT NULL,
  amount           DECIMAL(12,2) NOT NULL,
  description      VARCHAR(255) NOT NULL,
  category         VARCHAR(50) NOT NULL DEFAULT 'other',
  sub_category     VARCHAR(50),
  merchant         VARCHAR(100),
  transaction_date DATE NOT NULL,
  source           VARCHAR(20) NOT NULL DEFAULT 'manual',
  account_balance_before DECIMAL(14,2),
  account_balance_after  DECIMAL(14,2),
  wallet_balance_before  DECIMAL(14,2),
  wallet_balance_after   DECIMAL(14,2),
  is_recurring     TINYINT(1) NOT NULL DEFAULT 0,
  ai_confidence    DECIMAL(3,2),
  user_corrected   TINYINT(1) NOT NULL DEFAULT 0,
  created_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_date (user_id, transaction_date),
  INDEX idx_user_merchant (user_id, merchant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS budgets (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  user_id          INT NOT NULL,
  category         VARCHAR(50) NOT NULL,
  monthly_limit    DECIMAL(12,2) NOT NULL,
  month            DATE NOT NULL,
  alert_at_percent INT NOT NULL DEFAULT 80,
  created_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_user_category_month (user_id, category, month),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS goals (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  user_id       INT NOT NULL,
  title         VARCHAR(150) NOT NULL,
  target_amount DECIMAL(12,2) NOT NULL,
  saved_amount  DECIMAL(12,2) NOT NULL DEFAULT 0,
  deadline      DATE NOT NULL,
  status        VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS market_cache (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  asset_type  VARCHAR(20) NOT NULL,
  ticker      VARCHAR(20) NOT NULL,
  price_pkr   DECIMAL(12,4) NOT NULL,
  change_1d   DECIMAL(6,4),
  change_30d  DECIMAL(6,4),
  change_90d  DECIMAL(6,4),
  change_180d DECIMAL(6,4),
  change_365d DECIMAL(6,4),
  fetched_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_asset_ticker (asset_type, ticker)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS user_holdings (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  ticker       VARCHAR(20) NOT NULL,
  display_name VARCHAR(100) NOT NULL,
  asset_type   VARCHAR(20) NOT NULL DEFAULT 'stock',
  quantity     DECIMAL(12,4) NOT NULL,
  avg_cost_pkr DECIMAL(12,4) NOT NULL,
  acquired_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_user_ticker (user_id, ticker),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS stock_trades (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  ticker       VARCHAR(20) NOT NULL,
  display_name VARCHAR(100) NOT NULL,
  side         VARCHAR(4) NOT NULL,
  quantity     DECIMAL(12,4) NOT NULL,
  price_pkr    DECIMAL(12,4) NOT NULL,
  total_pkr    DECIMAL(14,2) NOT NULL,
  wallet_balance_before DECIMAL(14,2),
  wallet_balance_after  DECIMAL(14,2),
  created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_created (user_id, created_at),
  INDEX idx_user_ticker (user_id, ticker, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS ai_insights (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  type         VARCHAR(30) NOT NULL,
  content_en   TEXT NOT NULL,
  content_ur   TEXT,
  is_read      TINYINT(1) NOT NULL DEFAULT 0,
  rating       VARCHAR(10),
  generated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  valid_until  DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS report_cards (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  user_id       INT NOT NULL,
  month         DATE NOT NULL,
  overall_grade VARCHAR(5) NOT NULL,
  budget_score  INT NOT NULL,
  savings_score INT NOT NULL,
  trend_score   INT NOT NULL,
  summary_en    TEXT NOT NULL,
  summary_ur    TEXT,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_user_month (user_id, month),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS offer_partners (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  company_name   VARCHAR(100) NOT NULL,
  category       VARCHAR(50) NOT NULL,
  billing_model  VARCHAR(10) NOT NULL,
  rate_pkr       DECIMAL(10,2) NOT NULL,
  is_active      TINYINT(1) NOT NULL DEFAULT 1,
  created_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS offers (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  partner_id          INT NOT NULL,
  title               VARCHAR(150) NOT NULL,
  title_ur            VARCHAR(150),
  description         TEXT NOT NULL,
  target_category     VARCHAR(50) NOT NULL,
  min_monthly_spend   DECIMAL(10,2) NOT NULL,
  trigger_event       VARCHAR(50) NOT NULL,
  promo_code          VARCHAR(50),
  redemption_type     VARCHAR(20) NOT NULL DEFAULT 'code',
  deeplink_url        VARCHAR(255),
  valid_from          DATE NOT NULL,
  valid_until         DATE NOT NULL,
  max_redemptions     INT NOT NULL DEFAULT 1000,
  current_redemptions INT NOT NULL DEFAULT 0,
  is_active           TINYINT(1) NOT NULL DEFAULT 1,
  created_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (partner_id) REFERENCES offer_partners(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS user_offer_events (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  offer_id     INT NOT NULL,
  event_type   VARCHAR(20) NOT NULL,
  spend_amount DECIMAL(10,2),
  event_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (offer_id) REFERENCES offers(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS beneficiaries (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  user_id          INT NOT NULL,
  linked_user_id   INT,
  name             VARCHAR(100) NOT NULL,
  bank             VARCHAR(100),
  account_number   VARCHAR(50),
  iban             VARCHAR(50),
  nickname         VARCHAR(100),
  is_favorite      TINYINT(1) NOT NULL DEFAULT 0,
  created_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (linked_user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_beneficiary_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS peer_transfers (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  reference        VARCHAR(32) UNIQUE NOT NULL,
  sender_id        INT NOT NULL,
  recipient_id     INT NOT NULL,
  amount           DECIMAL(12,2) NOT NULL,
  fee              DECIMAL(12,2) NOT NULL DEFAULT 0,
  note             VARCHAR(255),
  status           VARCHAR(20) NOT NULL DEFAULT 'completed',
  sender_txn_id    INT,
  recipient_txn_id INT,
  created_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (recipient_id) REFERENCES users(id),
  INDEX idx_transfer_sender (sender_id, created_at),
  INDEX idx_transfer_recipient (recipient_id, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS money_requests (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  requester_id  INT NOT NULL,
  payer_id      INT NOT NULL,
  amount        DECIMAL(12,2) NOT NULL,
  reason        VARCHAR(255),
  status        VARCHAR(20) NOT NULL DEFAULT 'pending',
  transfer_id   INT,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  responded_at  DATETIME,
  FOREIGN KEY (requester_id) REFERENCES users(id),
  FOREIGN KEY (payer_id) REFERENCES users(id),
  FOREIGN KEY (transfer_id) REFERENCES peer_transfers(id) ON DELETE SET NULL,
  INDEX idx_request_requester (requester_id, status),
  INDEX idx_request_payer (payer_id, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS notifications (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  user_id    INT NOT NULL,
  type       VARCHAR(40) NOT NULL,
  title      VARCHAR(150) NOT NULL,
  body       TEXT NOT NULL,
  payload    JSON,
  is_read    TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_notification_user (user_id, is_read, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS bill_payments (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  user_id         INT NOT NULL,
  biller_code     VARCHAR(50) NOT NULL,
  biller_name     VARCHAR(100) NOT NULL,
  consumer_number VARCHAR(50) NOT NULL,
  amount          DECIMAL(12,2) NOT NULL,
  status          VARCHAR(20) NOT NULL DEFAULT 'paid',
  transaction_id  INT,
  paid_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_bill_user (user_id, paid_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
