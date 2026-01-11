class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    # todosテーブルを作成する。
    create_table :todos do |t|
      t.string :title, null: false
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
  end
end
