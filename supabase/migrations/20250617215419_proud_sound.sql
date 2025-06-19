/*
  # Fix quotes table read-only access

  1. Security Changes
    - Add read-only policy for quotes table
    - Ensure RLS is enabled
    - Allow anonymous users to read quotes

  2. Changes
    - Create "quotes read everything" policy for SELECT operations
    - Enable RLS on quotes table
    - Remove any conflicting policies
*/

-- Ensure RLS is enabled
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Drop any existing SELECT policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view own quotes" ON quotes;
DROP POLICY IF EXISTS "quotes read everything" ON quotes;

-- Create read-only policy that allows everyone to read
CREATE POLICY "quotes read everything"
  ON quotes
  FOR SELECT
  USING (true);

-- Keep existing INSERT policy for creating quotes
-- (The unified policy from previous migration should handle this correctly)

-- Verify no triggers fire for anonymous users on SELECT
-- (No triggers currently exist that would fire on SELECT operations)