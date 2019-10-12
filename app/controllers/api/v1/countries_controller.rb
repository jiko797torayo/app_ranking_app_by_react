class Api::V1::CountriesController < ApplicationController
  def index
    @countries = Country.order(name: :asc).select(:id, :name, :code)
    render json: { status: :ok, data: @countries }
  end
end
