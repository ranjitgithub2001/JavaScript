#include <iostream>
#include <vector>
#include <queue>

using namespace std;

// Function to simulate the flow of water through the terrain
void simulateWaterFlow(vector<vector<int> >& terrain) {
    int n = terrain.size();
    vector<vector<char> > result(n, vector<char>(n, '.'));  // Result grid to represent wet and dry cells

    // Priority queue to store cells with their elevations in non-decreasing order
    priority_queue<pair<int, pair<int, int> >, vector<pair<int, pair<int, int> > >, greater<pair<int, pair<int, int> > > > pq;

    // Starting from the central cell
    pq.push(make_pair(terrain[n/2][n/2], make_pair(n/2, n/2)));
    result[n/2][n/2] = 'W';  // Mark the central cell as wet

    cout << "Initial state:" << endl;
    // Display the initial state
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;

    int waterLevel = terrain[n/2][n/2];

    // Possible moves: up, down, left, right
    vector<int> dx(4, 0);
    vector<int> dy(4, 0);
    dx[0] = -1; dy[1] = 1;  // Up and down
    dy[2] = -1; dy[3] = 1;  // Left and right

    // Simulation loop
    while (!pq.empty()) {
        pair<int, pair<int, int> > current = pq.top();
        pq.pop();

        int cx = current.second.first;
        int cy = current.second.second;
        int cellElevation = terrain[cx][cy];

        // Check if water can flow to the neighboring cell
        if (waterLevel >= cellElevation) {
            result[cx][cy] = 'W';  // Mark the cell as wet

            // Check neighboring cells
            for (int i = 0; i < 4; ++i) {
                int nx = cx + dx[i];
                int ny = cy + dy[i];

                // Check if the neighboring cell is within bounds
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && result[nx][ny] == '.') {
                    pq.push(make_pair(terrain[nx][ny], make_pair(nx, ny)));
                }
            }
        }

        // If no neighboring cell is suitable, increase the water level
        if (pq.empty()) {
            cout << "Cannot flow, increasing water level to " << ++waterLevel << endl;
            cout << "----------" << endl;
            continue;
        }

        // Display the current state
        cout << "Current water level: " << waterLevel << endl;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                cout << result[i][j] << " ";
            }
            cout << endl;
        }
        cout << "----------" << endl;
    }

    cout << "Reached edge, exiting. Solution:" << endl;
    // Display the final state
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    // Get the dimension of the matrix from the user
    int n;
    cout << "Enter the dimension of the square matrix (odd size): ";
    cin >> n;

    if (n % 2 == 0) {
        cout << "The dimension must be odd. Exiting." << endl;
        return 1;
    }

    // Get the elevation values from the user
    cout << "Enter the elevation values for each cell in row-major order:" << endl;
    vector<vector<int> > terrain(n, vector<int>(n));
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            cin >> terrain[i][j];
        }
    }

    // Simulate water flow
    simulateWaterFlow(terrain);

    return 0;
}
