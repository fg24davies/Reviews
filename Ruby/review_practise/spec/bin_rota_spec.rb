
require './lib/bin_rota.rb'

describe '#bin_rota' do 
  it 'returns the order for one seat per row' do
    expect(bin_rota([["a"], ["b"], ["c"] ])).to eq  [ "a", "b", "c" ]
  end

  it 'returns the order for one seat per row' do
    expect(bin_rota([  ["a", "A"], ["b", "B"], ["c", "C"] ])).to eq  [ "a", "A", "B", "b", "c", "C" ] 
  end

end