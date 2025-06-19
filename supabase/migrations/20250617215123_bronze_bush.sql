/*
  # Fix quotes table RLS policies

  1. Security Updates
    - Drop existing conflicting INSERT policies
    - Create unified INSERT policy that allows both authenticated and anonymous users
    - Ensure authenticated users can only insert with their own user_id
    - Ensure anonymous users can only insert with null user_id

  2. Policy Changes
    - Remove restrictive policies that prevent proper quote submissions
    - Add comprehensive policy that handles both user types correctly
*/

-- Drop existing INSERT policies that are causing conflicts
DROP POLICY IF EXISTS "Anonymous users can create quotes" ON quotes;
DROP POLICY IF EXISTS "Authenticated users can create quotes" ON quotes;

-- Create a unified INSERT policy that handles both cases properly
CREATE POLICY "Users can create quotes"
  ON quotes
  FOR INSERT
  TO public
  WITH CHECK (
    -- Allow authenticated users to insert with their own user_id
    (auth.uid() IS NOT NULL AND user_id = auth.uid()) OR
    -- Allow anonymous users to insert with null user_id
    (auth.uid() IS NULL AND user_id IS NULL)
  );