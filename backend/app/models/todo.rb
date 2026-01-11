class Todo < ApplicationRecord
  # タイトル必須。
  validates :title, presence: true

  # 未削除のTodo。
  scope :active, -> { where(deleted_at: nil) }
  # 削除済みのTodo。
  scope :deleted, -> { where.not(deleted_at: nil) }
end
