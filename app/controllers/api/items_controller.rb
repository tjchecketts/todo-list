class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    # can't edit setup this way
    attrs = params.require(:item).permit(:name, :complete)
    item = Item.new(attrs)
    if item.save
      render json: item
    else 
      render json: { errors: item.errors }, status: 422
    end
  end

  def update
    item = Item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end 

  def destroy
    Item.find(params[:id]).destroy
  end 
end
