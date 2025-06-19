/*
  # Fix quotes table RLS policies for anonymous access

  1. Security Changes
    - Drop existing conflicting policies
    - Create separate policies for authenticated and anonymous users
    - Allow anonymous users to insert quotes with user_id = NULL
    - Allow authenticated users to insert quotes with user_id = auth.uid()

  2. Changes
    - Ensures anonymous users can submit bulk quotes
    - Maintains security for authenticated users
    - Fixes 401 RLS policy violation errors
*/

-- Drop all existing policies for quotes table
DROP POLICY IF EXISTS "Anyone can create quotes" ON quotes;
DROP POLICY IF EXISTS "Authenticated users can create quotes" ON quotes;
DROP POLICY IF EXISTS "Anonymous users can create quotes" ON quotes;
DROP POLICY IF EXISTS "Users can view own quotes" ON quotes;
DROP POLICY IF EXISTS "Users can update own quotes" ON quotes;

-- Create new INSERT policies
CREATE POLICY "Authenticated users can create quotes"
  ON quotes
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Anonymous users can create quotes"
  ON quotes
  FOR INSERT
  TO anon
  WITH CHECK (user_id IS NULL);

-- Create SELECT policies
CREATE POLICY "Users can view own quotes"
  ON quotes
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create UPDATE policies
CREATE POLICY "Users can update own quotes"
  ON quotes
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid() AND status = 'pending');

-- Ensure RLS is enabled
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;