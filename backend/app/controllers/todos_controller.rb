class TodosController < ApplicationController
  before_action :set_todo, only: [:destroy]

  # Todo一覧を返す。
  def index
    todos = Todo.order(created_at: :desc)
    render json: todos
  end

  # Todoを作成する。
  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo, status: :created
    else
      render json: { errors: todo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Todoを削除する。
  def destroy
    @todo.destroy
    head :no_content
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:title)
  end
end
