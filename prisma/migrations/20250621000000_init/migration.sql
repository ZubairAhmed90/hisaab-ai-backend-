-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_number` VARCHAR(12) NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `preferred_language` VARCHAR(5) NOT NULL DEFAULT 'en',
    `monthly_income` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `wallet_balance` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `account_balance` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `reset_token_hash` VARCHAR(255) NULL,
    `reset_token_expires` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `last_login` DATETIME(3) NULL,
    `linked_partner_id` INTEGER NULL,

    UNIQUE INDEX `users_account_number_key`(`account_number`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `spending_limits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner_id` INTEGER NOT NULL,
    `target_user_id` INTEGER NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `monthly_limit` DECIMAL(12, 2) NOT NULL,
    `alert_at_percent` INTEGER NOT NULL DEFAULT 80,
    `is_hard_limit` BOOLEAN NOT NULL DEFAULT true,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `spending_limits_owner_id_target_user_id_category_key`(`owner_id`, `target_user_id`, `category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `category` VARCHAR(50) NOT NULL DEFAULT 'other',
    `sub_category` VARCHAR(50) NULL,
    `merchant` VARCHAR(100) NULL,
    `transaction_date` DATE NOT NULL,
    `source` VARCHAR(20) NOT NULL DEFAULT 'manual',
    `is_recurring` BOOLEAN NOT NULL DEFAULT false,
    `ai_confidence` DECIMAL(3, 2) NULL,
    `user_corrected` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `transactions_user_id_transaction_date_idx`(`user_id`, `transaction_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `budgets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `monthly_limit` DECIMAL(12, 2) NOT NULL,
    `month` DATE NOT NULL,
    `alert_at_percent` INTEGER NOT NULL DEFAULT 80,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `budgets_user_id_category_month_key`(`user_id`, `category`, `month`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `target_amount` DECIMAL(12, 2) NOT NULL,
    `saved_amount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `deadline` DATE NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'active',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `market_cache` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `asset_type` VARCHAR(20) NOT NULL,
    `ticker` VARCHAR(20) NOT NULL,
    `price_pkr` DECIMAL(12, 4) NOT NULL,
    `change_1d` DECIMAL(6, 4) NULL,
    `change_30d` DECIMAL(6, 4) NULL,
    `change_90d` DECIMAL(6, 4) NULL,
    `change_180d` DECIMAL(6, 4) NULL,
    `change_365d` DECIMAL(6, 4) NULL,
    `fetched_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `market_cache_asset_type_ticker_key`(`asset_type`, `ticker`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_holdings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `ticker` VARCHAR(20) NOT NULL,
    `display_name` VARCHAR(100) NOT NULL,
    `asset_type` VARCHAR(20) NOT NULL DEFAULT 'stock',
    `quantity` DECIMAL(12, 4) NOT NULL,
    `avg_cost_pkr` DECIMAL(12, 4) NOT NULL,
    `acquired_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_holdings_user_id_ticker_key`(`user_id`, `ticker`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock_trades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `ticker` VARCHAR(20) NOT NULL,
    `display_name` VARCHAR(100) NOT NULL,
    `side` VARCHAR(4) NOT NULL,
    `quantity` DECIMAL(12, 4) NOT NULL,
    `price_pkr` DECIMAL(12, 4) NOT NULL,
    `total_pkr` DECIMAL(14, 2) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `stock_trades_user_id_created_at_idx`(`user_id`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ai_insights` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `type` VARCHAR(30) NOT NULL,
    `content_en` TEXT NOT NULL,
    `content_ur` TEXT NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `rating` VARCHAR(10) NULL,
    `generated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `valid_until` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report_cards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `month` DATE NOT NULL,
    `overall_grade` VARCHAR(5) NOT NULL,
    `budget_score` INTEGER NOT NULL,
    `savings_score` INTEGER NOT NULL,
    `trend_score` INTEGER NOT NULL,
    `summary_en` TEXT NOT NULL,
    `summary_ur` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `report_cards_user_id_month_key`(`user_id`, `month`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer_partners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(100) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `billing_model` VARCHAR(10) NOT NULL,
    `rate_pkr` DECIMAL(10, 2) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `partner_id` INTEGER NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `title_ur` VARCHAR(150) NULL,
    `description` TEXT NOT NULL,
    `target_category` VARCHAR(50) NOT NULL,
    `min_monthly_spend` DECIMAL(10, 2) NOT NULL,
    `trigger_event` VARCHAR(50) NOT NULL,
    `promo_code` VARCHAR(50) NULL,
    `redemption_type` VARCHAR(20) NOT NULL DEFAULT 'code',
    `deeplink_url` VARCHAR(255) NULL,
    `valid_from` DATE NOT NULL,
    `valid_until` DATE NOT NULL,
    `max_redemptions` INTEGER NOT NULL DEFAULT 1000,
    `current_redemptions` INTEGER NOT NULL DEFAULT 0,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_offer_events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `offer_id` INTEGER NOT NULL,
    `event_type` VARCHAR(20) NOT NULL,
    `spend_amount` DECIMAL(10, 2) NULL,
    `event_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_linked_partner_id_fkey` FOREIGN KEY (`linked_partner_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `spending_limits` ADD CONSTRAINT `spending_limits_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `spending_limits` ADD CONSTRAINT `spending_limits_target_user_id_fkey` FOREIGN KEY (`target_user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_holdings` ADD CONSTRAINT `user_holdings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock_trades` ADD CONSTRAINT `stock_trades_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ai_insights` ADD CONSTRAINT `ai_insights_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report_cards` ADD CONSTRAINT `report_cards_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offers` ADD CONSTRAINT `offers_partner_id_fkey` FOREIGN KEY (`partner_id`) REFERENCES `offer_partners`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_offer_events` ADD CONSTRAINT `user_offer_events_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_offer_events` ADD CONSTRAINT `user_offer_events_offer_id_fkey` FOREIGN KEY (`offer_id`) REFERENCES `offers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
