-- Run once on existing DB: mysql -u root -p hisaabai < scripts/migrate-balance-snapshots.sql
ALTER TABLE transactions
  ADD COLUMN account_balance_before DECIMAL(14,2) NULL AFTER source,
  ADD COLUMN account_balance_after DECIMAL(14,2) NULL AFTER account_balance_before,
  ADD COLUMN wallet_balance_before DECIMAL(14,2) NULL AFTER account_balance_after,
  ADD COLUMN wallet_balance_after DECIMAL(14,2) NULL AFTER wallet_balance_before;

ALTER TABLE stock_trades
  ADD COLUMN wallet_balance_before DECIMAL(14,2) NULL AFTER total_pkr,
  ADD COLUMN wallet_balance_after DECIMAL(14,2) NULL AFTER wallet_balance_before;

ALTER TABLE transactions ADD INDEX idx_user_merchant (user_id, merchant);
