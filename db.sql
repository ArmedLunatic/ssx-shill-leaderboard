CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  telegram_id BIGINT UNIQUE NOT NULL,
  username TEXT,
  wallet_address TEXT,
  referral_code TEXT UNIQUE,
  referred_by TEXT,
  points INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shills (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  submission_link TEXT,
  screenshot_url TEXT,
  status TEXT DEFAULT 'pending',
  points_awarded INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS referrals (
  id SERIAL PRIMARY KEY,
  referrer_id INT REFERENCES users(id),
  referred_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);