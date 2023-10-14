#include <bits/stdc++.h>
using namespace std;
#define ll long long
int main(){
ll t;
cin>>t;
while (t--){
    vector<ll>v;
    for(int i=0;i<3;i++){
        ll a;
        cin>>a;
        v.push_back(a);
   }

   

sort(v.begin(),v.end());
ll g=v[1];
for(int i=0;i<3;i++)
{
g=__gcd(v[i],g);
}

if(( g==v[0] && v[2]/g==4 && v[1]==v[0]) ||( g==v[0] &&(v[2]/g)<=3) && v[1]/g<=2){
 cout<<"YES"<<endl;
}

// if((g==v[0] && g==(v[1]/2) && g==(v[2]/3 && v[2]%3==0)) || ((g==v[0] && g==(v[1]) && g==(v[2]/4))) ||((g==v[0] && g==(v[1]) && g==(v[2]/2)))){
//     cout<<"YES"<<endl;
// }
//     else if((g==v[0] && g==(v[1]) && g==(v[2])) || (g==v[0] && g==(v[1]/2) && g==(v[2]/2) )){
//         cout<<"YES"<<endl;
//     }
    else
    cout<<"NO"<<endl;







// }

}}