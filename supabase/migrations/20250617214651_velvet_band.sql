/*
  # Fix quotes table RLS policy for bulk submissions

  1. Security Updates
    - Update INSERT policy to properly handle both authenticated and anonymous users
    - Ensure anonymous users can submit quotes with null user_id
    - Maintain existing UPDATE and SELECT policies for authenticated users

  2. Changes
    - Drop existing INSERT policy
    - Create new INSERT policy that properly handles anonymous submissions
    - Add policy for anonymous users to insert quotes
*/

-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Anyone can create quotes" ON quotes;

-- Create a new INSERT policy for authenticated users
CREATE POLICY "Authenticated users can create quotes"
  ON quotes
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create a new INSERT policy for anonymous users
CREATE POLICY "Anonymous users can create quotes"
  ON quotes
  FOR INSERT
  TO anon
  WITH CHECK (user_id IS NULL);