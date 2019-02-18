# frozen_string_literal: true

class AddEmailImageToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string
    add_column :users, :image, :string
  end
end
